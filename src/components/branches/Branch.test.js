import React from "react";
import { shallow } from "enzyme";
import { Branch } from "./Branch";

describe("Branch component", () => {
  it("should not show if no repository and organization", () => {
    const propsList = [
      { organization: null, repository: null },
      { organization: "organization name", repository: null },
      { organization: null, repository: "repository name" }
    ];
    propsList.forEach(props => {
      const wrapper = shallow(<Branch {...props} />);
      const type = wrapper.type();
      expect(type).toBe(null);
    });
  });
  it("should show if repository and organization are set", () => {
    const props = {
      organization: "organization name",
      repository: "repository name"
    };
    const wrapper = shallow(<Branch {...props} />);
    const type = wrapper.type();
    expect(type).toBe("h2");
    expect(
      wrapper.html().indexOf("organization name/repository name") > -1
    ).toBeTruthy();
  });
});
