import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComponent from "./Components/NewsComponent";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <NewsComponent
                key="general"
                pageSize="6"
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsComponent
                key="business"
                pageSize="6"
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsComponent
                key="entertainment"
                pageSize="6"
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <NewsComponent
                key="health"
                pageSize="6"
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <NewsComponent
                key="science"
                pageSize="6"
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <NewsComponent
                key="sports"
                pageSize="6"
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <NewsComponent
                key="technology"
                pageSize="6"
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
