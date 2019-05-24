import { createSelector } from "reselect";

export const getRepositoryPaginationSelector = createSelector(
  state => state.repositories,
  data => {
    const list = data.repositories;
    const page = data.page;
    const limit = data.limit;
    const rankBy = data.rankBy;
    const language = data.language;
    const offset = (page - 1) * limit;
    list.sort((repo1, repo2) => {
      return repo2[rankBy] - repo1[rankBy];
    });
    const processedList =
      !language || language === "all"
        ? list
        : list.filter(repository => repository.language === language);
    const count = processedList.length;
    return {
      items: processedList.slice(offset, offset + limit),
      count,
      limit,
      page
    };
  }
);

export const getRepositoryLanguagesSelector = createSelector(
  state => state.repositories,
  data => {
    const list = data.repositories;
    const languages = [...new Set(list.map(repository => repository.language))];
    return languages.filter(Boolean);
  }
);
