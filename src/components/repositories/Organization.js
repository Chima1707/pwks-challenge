import React from "react";
import { connect } from "react-redux";

export const Organization = ({ organization }) => {
  return organization ? (
    <h2 className="app-github-content-title">Organization: {organization}</h2>
  ) : null;
};

const mapStateToProps = ({ repositories: { organization } }) => ({
  organization
});

export default connect(mapStateToProps)(Organization);
