import React from "react";
import { shallow } from "enzyme";
import { BranchList } from "./BranchList";

describe("BranchList component", () => {
  it("should show Empty if no branch list", () => {
    const propsList = [{ branches: null }, { branches: [] }];
    propsList.forEach(props => {
      const wrapper = shallow(<BranchList {...{ branch: props }} />);
      const empty = wrapper.find("Empty");
      expect(empty).toBeDefined();
    });
  });
  it("should show List of BranchListItems if branches is not empty", () => {
    const props = [
      { name: "name1", commit: { url: "url1", sha: "sha1" } },
      { name: "name2", commit: { url: "url2", sha: "sha2" } }
    ];
    const wrapper = shallow(<BranchList {...{ branches: props }} />);
    const items = wrapper.find("BranchListItem");
    expect(items.length).toBe(props.length);
  });
});
