import React from "react";
import { shallow } from "enzyme";
import { Languages } from "./Languages";

describe("Languages component", () => {
  it("should display as a DropdownButton and behave correctly", () => {
    const props = {
      language: "all",
      languages: ["Java", "Javascript"],
      setRepositoriesLanguage: jest.fn()
    };
    const wrapper = shallow(<Languages {...props} />);
    const type = wrapper.type();
    expect(type.name).toBe("DropdownButton");
    const instance = wrapper.instance();
    instance.handleMenuClick({ key: "Java" });
    expect(props.setRepositoriesLanguage).toHaveBeenCalled();
  });
});
