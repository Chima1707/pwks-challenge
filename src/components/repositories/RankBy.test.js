import React from "react";
import { shallow } from "enzyme";
import { RankBy } from "./RankBy";

describe("RankBy component", () => {
  it("should display in a DropdownButton", () => {
    const propsList = [
      {
        rankBy: "forks_count"
      },
      {
        rankBy: "stargazers_count"
      }
    ];
    propsList.forEach(props => {
      const wrapper = shallow(<RankBy {...props} />);
      const type = wrapper.type();
      expect(type.name).toBe("DropdownButton");
    });
  });
  it("should behave correctly", () => {
    const props = {
      rankBy: "forks_count",
      setRepositoriesRanking: jest.fn()
    };
    const wrapper = shallow(<RankBy {...props} />);
    const instance = wrapper.instance();
    instance.handleMenuClick({ key: "stargazers_count" });
    expect(props.setRepositoriesRanking).toHaveBeenCalled();
  });
});
