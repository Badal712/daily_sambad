import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading: false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3a428199d676415e8632679edb30f67f";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})
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
      </div>
    )
  }
}

export default News
