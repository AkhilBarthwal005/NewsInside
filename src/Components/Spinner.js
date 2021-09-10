import React, { Component } from "react";
import Loading from "./img/ajax-loader.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={Loading} alt="" />
      </div>
    );
  }
}
