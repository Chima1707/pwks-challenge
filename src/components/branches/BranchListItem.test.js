import React from "react";
import { shallow } from "enzyme";
import { BranchListItem } from "./BranchListItem";

describe("BranchListItem component", () => {
  it("should display BranchListItem as a Card ", () => {
    const props = {
      branch: { name: "name", commit: { url: "url", sha: "sha" } }
    };
    const wrapper = shallow(<BranchListItem {...props} />);
    expect(wrapper.hasClass("app-github-list-item")).toBeTruthy();
    const type = wrapper.type();
    expect(type.name).toBe("Card");
  });
});
