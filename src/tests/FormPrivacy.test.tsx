import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import FormPrivacy from "../components/FormPrivacy";

describe("FormPrivacy", () => {
  const mock = {
    changePage: jest.fn(),
    handleChange: jest.fn(),
  };

  it("should render", () => {
    const tree = renderer.create(<FormPrivacy {...mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
