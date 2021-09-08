import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("Hello i am constructor of News Component");

    this.state = {
      // here we are using state.
      article: [],
      loading: false,
      page: 1,
      totalResult: 0,
    };
    document.title = `NewsInsider - ${this.capitalize(this.props.category)}`;
  }

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  async componentDidMount() {
    this.loadNews(this.state.page);
  }

  loadNews = async (page) => {
    console.log("load method");
    // console.log(this.state.page);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b32f83d132f4a188e704ad96a6575e2&page=${page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      article: parseData.articles,
      totalResult: parseData.totalResults,
      loading: false,
    });
  };

  handlePrevious = async () => {
    console.log("Previous page");
    // this.setState({ loading: true });
    this.loadNews(this.state.page - 1);
    this.setState({
      page: this.state.page - 1,
    });
    console.log(this.state.page);
  };
  handleNext = async () => {
    console.log("Next page");
    // this.setState({ loading: true });
    console.log(this.state.page);
    this.loadNews(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div>
        <div className="container my-2">
          <h1 className="text-center my-4">
            NewsInsider - Top {this.capitalize(this.props.category)} HeadLines
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {/* we are using javascript higher order method called map and iterate over array */}
            {!this.state.loading &&
              this.state.article.map((element) => {
                // console.log(element);
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title
                          ? //element.title.length > 45
                            //? element.title.slice(0, 45) + "..."
                            element.title
                          : "Title missing"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 250) + "..."
                          : "Description is missing"
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
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
            disabled={
              this.state.page + 1 >=
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
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
