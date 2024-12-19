import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { HashRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import TasksService from "./services/tasks.service";
import TasksStore from "./stores/tasks.store";
import UserStore from "./stores/user.store";
import AuthService from "./services/auth.service";

import { RouterStore } from "mobx-react-router";

const services = {};
const stores = {};

stores.routerStore = new RouterStore();
services.tasksService = new TasksService(stores.routerStore);
services.authService = new AuthService();

stores.tasksStore = new TasksStore(services.tasksService);
stores.userStore = new UserStore(services.authService);

stores.tasksStore = new TasksStore(services.tasksService);
stores.userStore = new UserStore(services.authService);

const TheRoot = (
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(TheRoot);

serviceWorker.unregister();
