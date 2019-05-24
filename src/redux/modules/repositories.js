import { getRepositories } from "./../../api/index";
import { setError } from "./ui";

export const LOAD_REPOSITORIES = "payworks/repositories/LOAD_REPOSITORIES";
export const SET_REPOSITORIES = "payworks/repositories/SET_REPOSITORIES";
export const SET_REPOSITORIES_PAGE =
  "payworks/repositories/SET_REPOSITORIES_PAGE";
export const SET_REPOSITORIES_RANKING =
  "payworks/repositories/SET_REPOSITORIES_RANKING";
export const SET_REPOSITORIES_LANGUAGE =
  "payworks/repositories/SET_REPOSITORIES_LANGUAGE";
export const CLEAR_ORGANIZATION = "payworks/repositories/CLEAR_ORGANIZATION";

export function loadRepositories(organization) {
  return {
    type: LOAD_REPOSITORIES,
    organization
  };
}

export function setRepositories(repositories) {
  return {
    type: SET_REPOSITORIES,
    repositories
  };
}

export function fetchRepositories(organization) {
  return dispatch => {
    dispatch(loadRepositories(organization));
    return getRepositories(organization)
      .then(repositories => {
        dispatch(setRepositories(repositories));
      })
      .catch(err => {
        dispatch(setError(err.message));
        dispatch(clearOrganization());
      });
  };
}

export function setRepositoriesPage(page) {
  return {
    type: SET_REPOSITORIES_PAGE,
    page
  };
}

export function setRepositoriesRanking(rankBy) {
  return {
    type: SET_REPOSITORIES_RANKING,
    rankBy
  };
}

export function setRepositoriesLanguage(language) {
  return {
    type: SET_REPOSITORIES_LANGUAGE,
    language
  };
}

export function clearOrganization() {
  return {
    type: CLEAR_ORGANIZATION
  };
}

const initialState = {
  organization: "",
  repositories: [],
  page: 1,
  limit: 10,
  rankBy: "forks_count",
  language: "all"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOSITORIES:
      return Object.assign({}, state, {
        organization: action.organization,
        repositories: []
      });
    case SET_REPOSITORIES:
      return Object.assign({}, state, {
        repositories: action.repositories,
        page: 1,
        rankBy: "forks_count",
        language: "all"
      });
    case SET_REPOSITORIES_PAGE:
      return Object.assign({}, state, {
        page: action.page
      });
    case SET_REPOSITORIES_RANKING:
      return Object.assign({}, state, {
        rankBy: action.rankBy,
        page: 1
      });
    case SET_REPOSITORIES_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
        page: 1
      });
    case CLEAR_ORGANIZATION:
      return Object.assign({}, state, {
        organization: "",
        page: 1
      });
    default:
      return state;
  }
}
