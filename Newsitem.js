import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
         let {title,description,imageurl,newsurl} = this.props;

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">read more</a>
            </div>
            </div>
            </div>
        )
    }
}

export default NewsItem
