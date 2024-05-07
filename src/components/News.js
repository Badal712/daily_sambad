import React, { Component } from 'react'
import NewsItem from '../NewsItem'

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
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  handelPrev = async () =>{
    console.log("Previous button click");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handelNext = async () =>{
    console.log("next button click");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
     })
    }
    
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Daily Sambad Top Headlines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage}newsUrl={element.url}/>
                  </div>
        })}
          
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick = {this.handelPrev}>&#8678; Previous</button>
          <button type="button" className="btn btn-secondary" onClick = {this.handelNext}>Next &#8680;</button>
        </div>
      </div>
    )
  }
}

export default News
