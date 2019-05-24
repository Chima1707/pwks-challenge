import React from "react";
import { connect } from "react-redux";
import { RepositoryListItem } from "./RepositoryListItem";
import { Paginator } from "../Paginator";
import RankBy from "../repositories/RankBy";
import Languages from "../repositories/Languages";
import { Empty } from "antd";
import { setRepositoriesPage } from "./../../redux/modules/repositories";
import { getRepositoryPaginationSelector } from "./../../redux/modules/selectors";

export const RepositoryList = ({
  items,
  page,
  count,
  limit,
  setRepositoriesPage
}) => {
  if (!items || !items.length) {
    return <Empty />;
  }
  const pageInfo = { page, count, limit, onChange: setRepositoriesPage };
  return (
    <>
      <div className="app-github-list-controls">
        <Paginator {...pageInfo} />
        <RankBy />
        <Languages />
      </div>
      <div className="app-github-list-list">
        {items.map(repository => (
          <RepositoryListItem key={repository.id} {...{ repository }} />
        ))}
      </div>
    </>
  );
};
const mapDispatchToProps = { setRepositoriesPage };

const mapStateToProps = state => getRepositoryPaginationSelector(state);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);
