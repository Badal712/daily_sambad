import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  handelPrev = async () =>{
    console.log("Previous button click");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  handelNext = async () =>{
    console.log("next button click");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
     })
    }
    
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">Daily Sambad Top Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return  <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage}newsUrl={element.url}/>
                  </div>
        })}
          
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick = {this.handelPrev}>&#8678; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick = {this.handelNext}>Next &#8680;</button>
        </div>
      </div>
    )
  }
}

export default News
