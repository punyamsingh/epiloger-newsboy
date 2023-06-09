import React,{ Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


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

    articles = [];

    capitalize = (s) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        };
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    }

    async componentDidMount() {
        // newsapi
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f30ea7a126f44dca364187e204658f8&page=1&pageSize=${this.props.pageSize}`;
        // newsdata.io
        // let url = "https://newsdata.io/api/1/news?apikey=pub_23913a699b6de0faf42742b1157d8640d17d2&country=${this.props.country}&category=${this.props.category}&language=en"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f30ea7a126f44dca364187e204658f8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    };

    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize ))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f30ea7a126f44dca364187e204658f8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        });
        // }
    };

    render() {
        return (
            <div className="container my-3">
                <em><h2 className="text-center" style={{ margin: "10px", paddingTop:"50px"}}>NewsMonkey - Top Headlines in {this.capitalize(this.props.category)}</h2></em>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={(element.title ? element.title.slice(0,60) : "") + "..."} description={(element.description ? element.description.slice(0,150) : "") + "..."} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107037740-1648489222571-GettyImages-1311362808.jpg?v=1648489337"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>;
                    })}
                </div>
                <div className="container d-flex justify-content-around">
                    <button disabled={this.state.page <= 1} type="button mb-3" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button mb-3" className="btn btn-dark" onClick={this.handleNextClick}>  Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;