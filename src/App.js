import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import Home from "./containers/Home";
import DisplayById from "./containers/DisplayById";
import DisplayRandom from "./containers/DisplayRandom";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/asteroids/random">
            <DisplayRandom />
          </Route>
          <Route exact path="/asteroids/:id">
            <DisplayById />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
