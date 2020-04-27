import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import FormUser from "../components/FormUser";

describe("FormUser", () => {
  const mock = {
    changePage: jest.fn(),
    handleChange: jest.fn(),
    error: "undefined",
  };

  it("should render", () => {
    const tree = renderer.create(<FormUser {...mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render the correct number of inputs", () => {
    const wrapper = shallow(<FormUser {...mock} />);
    expect(wrapper.find("FormInput").length).toEqual(4);
  });

  it("should render error if it exists", () => {
    const wrapper = shallow(<FormUser {...mock} />);
    expect(wrapper.find(".form-error")).toBeDefined();
  });

  it("should disable the submit button if there is an error", () => {
    const wrapper = shallow(<FormUser {...mock} />);
    expect(wrapper.find("SubmitButton").prop("disabled")).toBeDefined();
  });
});
