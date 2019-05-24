import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Repositories from "./components/repositories";
import Branches from "./components/branches";
import "./App.css";

export default () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Repositories} />
      <Route path="/:organization/:repository" component={Branches} />
    </HashRouter>
  );
};
