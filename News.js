import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {
    
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1, 
        }
    }
 
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9a20c551c48041b48540e64d11019219&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
         this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})

    }

    handleprevclick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9a20c551c48041b48540e64d11019219&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
         this.setState({
         articles: parsedData.articles,
         page: this.state.page - 1, 
        })
    }

    handlenextclick = async ()=> {
        if(Math.ceil(this.state.totalResults/20)){

        }else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9a20c551c48041b48540e64d11019219&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
         this.setState({
         articles: parsedData.articles,
         page: this.state.page + 1, 
        })
      }
    } 
    

    
    render() {

        return (
            <div className="container my-3">
                <h1>NewsMonkey-Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>

            <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
            <button type="button" class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>    
                </div>    

            </div>

        )
    }
}

export default News
