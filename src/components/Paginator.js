import React from "react";
import { Pagination } from "antd";

export const Paginator = ({ page, count, limit, onChange }) => (
  <Pagination
    className="app-github-reps-pagination"
    total={count}
    pageSize={limit}
    current={page}
    onChange={onChange}
  />
);
