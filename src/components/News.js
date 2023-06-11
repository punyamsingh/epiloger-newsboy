import React,{ useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);

    const capitalize = (s) => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const updateNews = async () => {
        if (articles.length === 0) setPage(page + 1);
        
        props.setProgress(20);
        
        // newsapi
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        
        props.setProgress(60);
        
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    },[]);


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    /*
    const handlePrevClick = async () => {
        setPage(page-1);
        updateNews();
    };

    const handleNextClick = async () => {
        setPage(page+1);
        updateNews();
    };
    */

    return (
        <>
            <em><h2
                className="text-center"
                style={{ margin: "10px",paddingTop: "50px" }}>
                NewsMonkey - Top Headlines in {capitalize(props.category)}</h2></em>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                endMessage={<p style={{ textAlign: "center" }}><b>Yay! You have seen it all</b></p>}
            >
                <div className="container">
                    <div className="row">
                        {/* {!loading && */}
                        {articles.map((element) => {
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
                    <button disabled={page <= 1} type="button mb-3" className="btn btn-dark" onClick={handlePrevClick}>&larr; Prev </button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button mb-3" className="btn btn-dark" onClick={handleNextClick}>  Next &rarr;</button>
                </div> */}
        </>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;