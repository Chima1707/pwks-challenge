import React from "react";

export const Branch = ({ organization, repository }) => {
  return organization && repository ? (
    <h2 className="app-github-content-title">
      Repository: {organization}/{repository}
    </h2>
  ) : null;
};
