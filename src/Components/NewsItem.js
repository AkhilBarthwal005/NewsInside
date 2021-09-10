import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props; // here we are deframing the array which passed as props and taking title and description from it.

    return (
      <div
        className="card my-2"
        style={{
          // width: "18rem",
          backgroundColor: "#04021f",
          color: "white",
          border: "2px solid white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.socialventurepartners.org/boulder-county/wp-content/themes/svpi/img/defaults/default-svp_news.jpg"
          }
          className="card-img-top"
          alt="..."
          height="150px"
          width="300px"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}
