import React from "react";
import { Layout } from "antd";

export default ({ children }) => (
  <div className="app-github-content">
    <Layout.Content className="app-github-root-content">
      {children}
    </Layout.Content>
  </div>
);
