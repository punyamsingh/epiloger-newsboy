import React,{ Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    // articles = [];

    capitalize = (s) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        if (this.state.articles.length === 0) this.setState({ page: this.state.page + 1 });
        this.props.setProgress(20);
        // newsapi
        // { console.log(this.state.articles.length); }
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        });
    };

    /*
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    };

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        });
    };
    */

    render() {
        return (
            <>
                <em><h2
                    className="text-center"
                    style={{ margin: "10px", paddingTop: "50px" }}>
                    NewsMonkey - Top Headlines in {this.capitalize(this.props.category)}</h2></em>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={<p style={{ textAlign: "center" }}><b>Yay! You have seen it all</b></p>}
                >
                    <div className="container">
                        <div className="row">
                            {/* {!this.state.loading && */}
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={(element.title ? element.title.slice(0,60) : "") + "..."}
                                        description={(element.description ? element.description.slice(0,150) : "") + "..."}
                                        imageUrl={element.urlToImage ? element.urlToImage : (process.env.REACT_APP_DEFAULT_IMAGE)}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>;
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* next and prev button */}
                {/* <div className="container d-flex justify-content-around">
                    <button disabled={this.state.page <= 1} type="button mb-3" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button mb-3" className="btn btn-dark" onClick={this.handleNextClick}>  Next &rarr;</button>
                </div> */}
            </>
        );
    }
}

export default News;