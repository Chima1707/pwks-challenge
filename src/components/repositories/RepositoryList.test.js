import React from "react";
import { shallow } from "enzyme";
import { RepositoryList } from "./RepositoryList";

describe("RepositoryList component", () => {
  it("should show Empty if no repository list", () => {
    const propsList = [{ repositories: null }, { repositories: [] }];
    propsList.forEach(props => {
      const wrapper = shallow(<RepositoryList {...{ branch: props }} />);
      const empty = wrapper.find("Empty");
      expect(empty).toBeDefined();
    });
  });
  it("should show List of BranchListItems if branches is not empty", () => {
    const items = [
      { name: "name1", description: "description1", id: "id1" },
      { name: "name2", description: "description2", id: "id2" }
    ];
    const page = 1;
    const count = 20;
    const limit = 10;
    const onChange = jest.fn();
    const wrapper = shallow(
      <RepositoryList {...{ items, page, count, limit, onChange }} />
    );
    const listItems = wrapper.find("RepositoryListItem");
    expect(listItems.length).toBe(items.length);
  });
});
