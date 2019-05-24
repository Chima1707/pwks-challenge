import ui, { SET_ERROR, CLEAR_ERROR } from "./ui";

describe("ui reducer", () => {
  it("should handle initial state: error and loading should not be set", () => {
    const initialState = {
      error: "",
      loading: false
    };
    expect(ui(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_ERROR: should set error", () => {
    const state = {
      error: "",
      loading: false
    };
    const afterSetErrorState = {
      error: "error",
      loading: false
    };
    expect(ui(state, { type: SET_ERROR, error: "error" })).toEqual(
      afterSetErrorState
    );
  });
  it("should handle CLEAR_ERROR: should clear error", () => {
    const state = {
      error: "error",
      loading: false
    };
    const afterClearErrorState = {
      error: "",
      loading: false
    };
    expect(ui(state, { type: CLEAR_ERROR })).toEqual(afterClearErrorState);
  });
});
