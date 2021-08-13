import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/main.css";

import Main from "./components/mainpage";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="appDiv">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
