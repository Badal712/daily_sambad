import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    const cardStyle = {
      backgroundColor: this.props.mode === "dark" ? "#212529" : "white",
      color: this.props.mode === "light" ? "black" : "white",
    };
    return (
      <div className="my-3">
        <div className="card" style={cardStyle}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%',zIndex:'1'}}>
            {source}
          </span>
          <img
            src={
              !imgUrl
                ? "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small
                style={{
                  color:
                    this.props.mode === "light"
                      ? "rgb(138 147 157 / 75%)"
                      : "white",
                }}
                className="text-body-secondary"
              >
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-sm btn-${
                this.props.mode === "light" ? "dark" : "primary"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
