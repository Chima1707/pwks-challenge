import React from "react";
import RepositoryList from "./RepositoryList";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import Content from "./../layout/Content";
import Search from "./Search";
import Organization from "./Organization";
import LoadingSpinner from "./../LoadingSpinner";

const Repositories = () => (
  <>
    <Header>
      <Search />
    </Header>
    <Content>
      <LoadingSpinner />
      <Organization />
      <RepositoryList />
    </Content>
    <Footer />
  </>
);

export default Repositories;
