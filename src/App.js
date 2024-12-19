import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { inject, observer } from "mobx-react";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";

@inject("routerStore")
@observer
class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={React.createElement(SignInPage)} />
        <Route path="/signin/" element={React.createElement(SignInPage)} />
        <Route path="/signup/" element={React.createElement(SignUpPage)} />
        <Route exact path="/tasks" element={React.createElement(TasksPage)} />
        <Route
          exact
          path="/tasks/create"
          element={React.createElement(CreateTaskPage)}
        />
      </Routes>
    );
  }
}

export default App;
