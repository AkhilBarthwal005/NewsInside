import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsComponent extends Component {
  constructor() {
    super();
    console.log("Hello i am constructor of News Component");

    this.state = {
      // here we are using state.
      article: [],
      loading: false,
      page: 1,
      pageSize: 20,
      totalResult: 0,
    };
  }

  async componentDidMount() {
    // this is function which run after the render method automatically and we are making it async.
    console.log("cdm method");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b32f83d132f4a188e704ad96a6575e2&page=1&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      article: parseData.articles,
      totalResult: parseData.totalResults,
    });
  }

  loadNews = async (page) => {
    console.log("load method");
    // console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b32f83d132f4a188e704ad96a6575e2&page=${page}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({ article: parseData.articles });
  };

  handlePrevious = () => {
    console.log("Previous page");
    this.loadNews(this.state.page - 1);
    this.setState({
      page: this.state.page - 1,
      pageSize: this.state.pageSize - 20,
    });
    console.log(this.state.page);
  };
  handleNext = () => {
    console.log("Next page");
    console.log(this.state.page);
    this.loadNews(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
      pageSize: this.state.pageSize + 20,
    });
  };

  render() {
    return (
      <div>
        <div className="container my-2">
          <h1>NewsInside - Top HeadLines</h1>
          <div className="row">
            {/* we are using javascript higher order method called map and iterate over array */}
            {this.state.article.map((element) => {
              // console.log(element);
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title
                        ? element.title.length > 45
                          ? element.title.slice(0, 45) + "..."
                          : element.title
                        : "Title missing"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : "Description is missing"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.pageSize >= this.state.totalResult}
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
