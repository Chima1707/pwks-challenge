import React from "react";
import { Layout } from "antd";

const Header = ({ children }) => (
  <Layout.Header className="app-github-root-header">{children}</Layout.Header>
);

export default Header;
