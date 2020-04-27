import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import FormPrivFormCompleteacy from "../components/FormComplete";

describe("FormComplete", () => {

  it("should render", () => {
    const tree = renderer.create(<FormComplete />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
