import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComponent from "./Components/NewsComponent";
import Footer from "./Components/Footer";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Switch>
            <Route exact path="/">
              <NewsComponent
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <NewsComponent
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsComponent
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <NewsComponent
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <NewsComponent
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <NewsComponent
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <NewsComponent
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
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
