import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import waitForExpect from "wait-for-expect";

import App from "./App";
import reducer from "./redux/modules";
import repositories from "./mock/repositories";

jest.mock("axios");

const TIMEOUT = 2000;

const createApp = () => {
  const store = createStore(
    reducer,
    undefined,
    applyMiddleware(thunkMiddleware)
  );

  return mount(
    <Provider {...{ store }}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
};

describe("App", () => {
  it("index page, should be empty at first", () => {
    const app = createApp();
    const content = app.find(".app-github-content");
    expect(content.length).toBe(1);
  });
  it("search for an organization, should show its repositories if found", async () => {
    const app = createApp();
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: repositories })
    );
    const searchInput = app.find(".ant-input");
    const searchButton = app.find(".ant-btn");
    searchInput.simulate("change", { target: { value: "org" } });
    searchButton.simulate("click");
    await waitForExpect(() => {
      app.update();
      const controls = app.find(".app-github-list-list");
      return controls.exists();
    }, TIMEOUT);
    const repositoryItems = app.find("div.app-github-list-item");
    expect(repositoryItems.length).toBe(repositories.length);
  });
});
