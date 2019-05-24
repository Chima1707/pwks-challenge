import React from "react";
import { shallow } from "enzyme";
import { Organization } from "./Organization";

describe("Organization component", () => {
  it("should not show if no organization", () => {
    const propsList = [{ organization: null }, { organization: "" }];
    propsList.forEach(props => {
      const wrapper = shallow(<Organization {...props} />);
      const type = wrapper.type();
      expect(type).toBe(null);
    });
  });
  it("should show only if organization is set", () => {
    const props = {
      organization: "organization name"
    };
    const wrapper = shallow(<Organization {...props} />);
    const type = wrapper.type();
    expect(type).toBe("h2");
    expect(wrapper.html().indexOf("organization name") > -1).toBeTruthy();
  });
});
