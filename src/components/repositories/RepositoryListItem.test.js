import React from "react";
import { shallow } from "enzyme";
import { RepositoryListItem } from "./RepositoryListItem";

describe("RepositoryListItem component", () => {
  it("should display RepositoryListItem as a Card ", () => {
    const props = {
      repository: { name: "name", description: "description" }
    };
    const wrapper = shallow(<RepositoryListItem {...props} />);
    expect(wrapper.hasClass("app-github-list-item")).toBeTruthy();
    const type = wrapper.type();
    expect(type.name).toBe("Card");
  });
});
