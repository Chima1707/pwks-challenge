import { getBranches } from "./../../api/index";
import { setError } from "./ui";
export const LOAD_BRANCHES = "payworks/repositories/LOAD_BRANCHES";
export const SET_BRANCHES = "payworks/repositories/SET_BRANCHES";

export function loadBranches(repository) {
  return {
    type: LOAD_BRANCHES,
    repository
  };
}

export function setBranches(branches) {
  return {
    type: SET_BRANCHES,
    branches
  };
}

export function fetchBranches(organization, repository) {
  return dispatch => {
    dispatch(loadBranches(repository));
    return getBranches(organization, repository)
      .then(branches => {
        dispatch(setBranches(branches));
      })
      .catch(err => {
        dispatch(setError(err.message));
      });
  };
}

const initialState = {
  repository: "",
  branches: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BRANCHES:
      return Object.assign({}, state, {
        repository: action.repository
      });
    case SET_BRANCHES:
      return Object.assign({}, state, {
        branches: action.branches
      });
    default:
      return state;
  }
}
