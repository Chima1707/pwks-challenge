import React from "react";
import { connect } from "react-redux";
import { fetchRepositories } from "./../../redux/modules/repositories";
import { Input } from "antd";

export const Search = ({ fetchRepositories }) => (
  <Input.Search
    className="app-github-filter-search"
    placeholder="Organization name"
    enterButton
    onSearch={fetchRepositories}
  />
);

const mapDispatchToProps = { fetchRepositories };

export default connect(
  null,
  mapDispatchToProps
)(Search);
