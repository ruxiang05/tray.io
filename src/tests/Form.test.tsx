import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import Form from "../components/Form";
import FormUser from "../components/FormUser";
import FormPrivacy from "../components/FormPrivacy";
import FormComplete from "../components/FormComplete";
import SubmitButton from "../components/SubmitButton";

describe("Form", () => {
  const mock = {
    changePage: jest.fn(),
    handleChange: jest.fn(),
    error: "undefined",
  };

  it("should render", () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render the correct form page", () => {
    const wrapper = mount(<Form />);
    let submitButton = wrapper.find(SubmitButton);
    expect(submitButton).toBeDefined();
    submitButton.simulate("click");
    expect(wrapper.find(FormPrivacy)).toBeDefined();
  });
});
