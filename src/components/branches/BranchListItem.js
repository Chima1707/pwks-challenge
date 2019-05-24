/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Card } from "antd";

export const BranchListItem = ({ branch }) => (
  <Card
    title={<h3>{branch.name}</h3>}
    className="app-github-list-item app-github-branch-listitem"
  >
    <ul className="app-github-details-list">
      <li>
        <dt>Commit</dt>
        <dd>
          <a href={branch.commit.url} target="_blank">
            {branch.commit.sha}
          </a>
        </dd>
      </li>
    </ul>
  </Card>
);
