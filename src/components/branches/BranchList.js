import React from "react";
import { Empty } from "antd";
import { BranchListItem } from "./BranchListItem";

export const BranchList = ({ branches }) => {
  if (!branches || !branches.length) {
    return <Empty />;
  }
  return (
    <div className="app-github-list-list">
      {branches.map(branch => (
        <BranchListItem key={branch.name} {...{ branch }} />
      ))}
    </div>
  );
};
