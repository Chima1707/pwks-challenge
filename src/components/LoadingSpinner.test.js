import React from "react";
import { shallow } from "enzyme";
import { LoadingSpinner } from "./LoadingSpinner";

describe("LoadingSpinner component", () => {
  it("should display spinner when loading", () => {
    const props = { loading: true };
    const wrapper = shallow(<LoadingSpinner {...props} />);
    const spinning = wrapper.prop("spinning");
    expect(spinning).toBeTruthy();
  });

  it("should not display spinner not loading", () => {
    const props = { loading: false };
    const wrapper = shallow(<LoadingSpinner {...props} />);
    const spinning = wrapper.prop("spinning");
    expect(spinning).toBeFalsy();
  });

  it("should be centered on page", () => {
    const props = { loading: true };
    const wrapper = shallow(<LoadingSpinner {...props} />);
    expect(wrapper.hasClass("centered")).toBeTruthy();
  });
});
