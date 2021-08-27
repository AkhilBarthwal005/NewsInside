import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsComponent extends Component {
  render() {
    return (
      <div>
        This is news Component.
        <NewsItem />
      </div>
    );
  }
}
