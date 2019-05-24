import get from "./get";

export const getRepositories = organization =>
  get(`/orgs/${organization}/repos`).catch(err => {
    if (err.queryStatus === 404) {
      throw new Error(`Organization not found`);
    }
    throw err;
  });

export const getBranches = (organization, repository) =>
  get(`/repos/${organization}/${repository}/branches`).catch(err => {
    if (err.queryStatus === 404) {
      throw new Error(`Branch not found`);
    }
    throw err;
  });
