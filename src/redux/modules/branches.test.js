import branches, { LOAD_BRANCHES, SET_BRANCHES } from "./branches";

describe("branches reducer", () => {
  it("should handle initial state: branches and organization is empty", () => {
    const initialState = {
      repository: "",
      branches: []
    };
    expect(branches(undefined, {})).toEqual(initialState);
  });

  it("should handle LOAD_BRANCHES: should set repository name", () => {
    const state = {
      repository: "",
      branches: []
    };
    const afterLoadBranchesState = {
      repository: "repo",
      branches: []
    };
    expect(
      branches(state, { type: LOAD_BRANCHES, repository: "repo" })
    ).toEqual(afterLoadBranchesState);
  });

  it("should handle SET_BRANCHES: should set branches", () => {
    const state = {
      repository: "",
      branches: [{}, {}]
    };
    const afterSetBranchesState = {
      repository: "",
      branches: []
    };
    expect(branches(state, { type: SET_BRANCHES, branches: [] })).toEqual(
      afterSetBranchesState
    );
  });
});
