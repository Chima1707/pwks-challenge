import React, { Component } from "react";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import Content from "./../layout/Content";
import LoadingSpinner from "./../LoadingSpinner";
import { Branch } from "./Branch";
import { BranchList } from "./BranchList";
import { connect } from "react-redux";
import { fetchBranches } from "./../../redux/modules/branches";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export const GoBack = ({ repository, organization }) => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link to="/">{organization}</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>{repository}</Breadcrumb.Item>
  </Breadcrumb>
);

export class Branches extends Component {
  componentDidMount() {
    const organization = this.props.match.params.organization;
    const repository = this.props.match.params.repository;
    this.props.fetchBranches(organization, repository);
  }

  render() {
    return (
      <>
        <Header />
        <Content>
          <LoadingSpinner />
          <GoBack {...this.props} />
          <Branch {...this.props} />
          <BranchList {...this.props} />
        </Content>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = { fetchBranches };
const mapStateToProps = ({
  repositories: { organization },
  branches: { repository, branches }
}) => ({ organization, repository, branches });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Branches);
