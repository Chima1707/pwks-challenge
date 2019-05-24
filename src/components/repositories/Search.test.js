import React from "react";
import { mount } from "enzyme";
import { Search } from "./Search";

describe("Search component", () => {
  it("should display properly", () => {
    const props = { fetchRepositories: jest.fn() };
    const wrapper = mount(<Search {...props} />);
    const search = wrapper.find("Search");
    expect(search).toBeDefined();
  });

  it("should fetch repositories when Search button is clicked", () => {
    const props = { fetchRepositories: jest.fn() };
    const wrapper = mount(<Search {...props} />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(props.fetchRepositories).toHaveBeenCalled();
  });
});
