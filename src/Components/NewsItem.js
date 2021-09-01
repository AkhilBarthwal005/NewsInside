import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props; // here we are deframing the array which passed as props and taking title and description from it.

    return (
      <div className="card my-2" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}
