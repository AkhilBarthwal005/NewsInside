import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsComponent extends Component {
  render() {
    return (
      <div className="container my-2">
        <h1>NewsInside - Top HeadLines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="My title" description="My description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="My description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="My title" description="My description" />
          </div>
        </div>
      </div>
    );
  }
}
