import repositories, {
  SET_REPOSITORIES,
  SET_REPOSITORIES_LANGUAGE,
  SET_REPOSITORIES_PAGE,
  SET_REPOSITORIES_RANKING,
  LOAD_REPOSITORIES,
  CLEAR_ORGANIZATION
} from "./repositories";

describe("repositories reducer", () => {
  it("should handle initial state", () => {
    const initialState = {
      organization: "",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    expect(repositories(undefined, {})).toEqual(initialState);
  });
  it("should handle LOAD_REPOSITORIES: should set organization name", () => {
    const state = {
      organization: "old organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    const afterLoadRepositoriesState = {
      organization: "new organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    expect(
      repositories(state, {
        type: LOAD_REPOSITORIES,
        organization: "new organization"
      })
    ).toEqual(afterLoadRepositoriesState);
  });
  it("should handle CLEAR_ORGANIZATION: should clear organization name", () => {
    const state = {
      organization: "old organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    const afterClearRepositoriesState = {
      organization: "",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    expect(
      repositories(state, {
        type: CLEAR_ORGANIZATION
      })
    ).toEqual(afterClearRepositoriesState);
  });
  it("should handle SET_REPOSITORIES: should set repositories", () => {
    const state = {
      organization: "organization",
      repositories: [{}, {}],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    const afterSetRepositoriesState = {
      organization: "organization",
      repositories: [{}, {}, {}],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    expect(
      repositories(state, {
        type: SET_REPOSITORIES,
        repositories: [{}, {}, {}]
      })
    ).toEqual(afterSetRepositoriesState);
  });
  it("should handle SET_REPOSITORIES_PAGE: should set repositories page", () => {
    const state = {
      organization: "organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    const afterSetRepositoriesPageState = {
      organization: "organization",
      repositories: [],
      page: 3,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    expect(
      repositories(state, {
        type: SET_REPOSITORIES_PAGE,
        page: 3
      })
    ).toEqual(afterSetRepositoriesPageState);
  });
  it("should handle SET_REPOSITORIES_LANGUAGE: should set repositories language", () => {
    const state = {
      organization: "organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "all"
    };
    const afterSetRepositoriesLanguageState = {
      organization: "organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "forks_count",
      language: "Java"
    };
    expect(
      repositories(state, {
        type: SET_REPOSITORIES_LANGUAGE,
        language: "Java"
      })
    ).toEqual(afterSetRepositoriesLanguageState);
  });
  it("should handle SET_REPOSITORIES_RANKING: should set repositories ranking", () => {
    const state = {
      organization: "organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "stars",
      language: "Java"
    };
    const afterSetRepositoriesRankingState = {
      organization: "organization",
      repositories: [],
      page: 1,
      limit: 10,
      rankBy: "stars",
      language: "Java"
    };
    expect(
      repositories(state, {
        type: SET_REPOSITORIES_RANKING,
        rankBy: "stars"
      })
    ).toEqual(afterSetRepositoriesRankingState);
  });
});
