import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
    console.log("cmd");
    this.loadNews();
  }

  loadNews = async () => {
    console.log("load method");
    // console.log(this.state.page);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b32f83d132f4a188e704ad96a6575e2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      article: this.state.article.concat(parseData.articles),
      totalResult: parseData.totalResults,
      loading: false,
    });
  };

  fetchMoreData = () => {
    console.log("fetchmore data");
    this.setState({ page: this.state.page + 1 });
    this.loadNews();
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="text-center my-4">
            NewsInsider - Top {this.capitalize(this.props.category)} HeadLines
          </h1>
          {/* {this.state.loading && <Spinner />} */}

          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={
              this.state.page !==
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {/* we are using javascript higher order method called map and iterate over array */}
                {/* {console.log(this.state.page)}
                {console.log(
                  Math.ceil(this.state.totalResult / this.props.pageSize)
                )} */}
                {this.state.article.map((element) => {
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
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
