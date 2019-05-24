import { LOAD_BRANCHES, SET_BRANCHES } from "./branches";
import { LOAD_REPOSITORIES, SET_REPOSITORIES } from "./repositories";
export const SET_ERROR = "payworks/ui/SET_ERROR";
export const CLEAR_ERROR = "payworks/ui/CLEAR_ERROR";

export function setError(error) {
  return {
    type: SET_ERROR,
    error
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR
  };
}

const initialState = {
  error: "",
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOSITORIES:
    case LOAD_BRANCHES:
      return Object.assign({}, state, {
        loading: true
      });
    case SET_REPOSITORIES:
    case SET_BRANCHES:
      return Object.assign({}, state, {
        loading: false
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    case CLEAR_ERROR:
      return Object.assign({}, state, {
        error: ""
      });
    default:
      return state;
  }
}
