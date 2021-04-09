import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sighting from "./Sighting";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path="/Sighting">
            <Sighting />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );}

export default App;
