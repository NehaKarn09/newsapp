import React, {useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export function News(props) {


  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const [articles,setArticles] =useState([])
  const [loading,setLoading] =useState(true)
  const [page,setPage] =useState(1)
  const [totalResults,setTotalResults] =useState(0)

  
    
   
  

    const updateNews= async () =>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
    
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(70)
    let parsedData = await data.json();
    
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
    console.log(parsedData); //it tells about the total no. of articles and totalResults
        document.title = `${capitalize(props.category)}- NewsMonkey`;
  }
  
  useEffect(() => {
    updateNews();
  },[])
  
  

  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}`;
    setPage(page+1)

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

  // const handlePrevclick = () => {
  //   // console.log("Previous");

  //   updateNews()
      // setPage(page-1)
  //   
  // }
  // const handleNextclick = async() => {
      
        // setPage(page+1)
  //     
  //     updateNews()
  // }

  

  
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px" ,marginTop: "97px"}}>
          NewsFusion - Top {capitalize(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0, 45)} description={element.description? element.description.slice(0, 88): "There is no description"} imageUrl={element.urlToImage? element.urlToImage: "https://imageio.forbes.com/specials-images/imageserve/63fa3390146518bf6a8ba852/0x0.jpg?format=jpg&crop=1083,609,x164,y104,safe&width=1200"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name}/>
                  </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous </button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
      </div> */}
      </>
    )
  
}


News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News
