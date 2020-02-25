import React from "react";
import Enzyme, { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./index";

configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  const Appcomponent = mount(<App {...props} />);
  return Appcomponent;
};

describe("Main App", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("scroll state is initialized at 0", () => {
    expect(component.state("scrollTop")).toBe(0);
  });

});
