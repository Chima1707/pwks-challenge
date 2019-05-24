import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

export const LoadingSpinner = ({ loading }) => (
  <Spin size="large" className="centered" spinning={loading} />
);

const mapStateToProps = ({ ui: { loading } }) => ({ loading });

export default connect(mapStateToProps)(LoadingSpinner);
