import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="col-md-4 px-3 d-flex align-items-center">
              <span className="">&copy; 2021 NewsInsider, Inc</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
