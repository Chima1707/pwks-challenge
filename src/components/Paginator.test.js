import React from "react";
import { mount } from "enzyme";
import { Paginator } from "./Paginator";

describe("Paginator component", () => {
  it("should display properly", () => {
    const props = { page: 1, count: 10, limit: 5, onChange: jest.fn() };
    const wrapper = mount(<Paginator {...props} />);
    const pagination = wrapper.find("Pagination");
    expect(pagination).toBeDefined();
  });
  it("should call onChange when clicked", () => {
    const props = { page: 1, count: 10, limit: 5, onChange: jest.fn() };
    const wrapper = mount(<Paginator {...props} />);
    const pagination = wrapper.find("Pagination");
    const items = pagination.find(".ant-pagination-item");
    const child = items.at(1);
    child.simulate("click");
    expect(props.onChange).toHaveBeenCalled();
  });
});
