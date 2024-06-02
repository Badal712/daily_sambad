import React from "react";

const NewsItem = (props) =>{

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    const cardStyle = {
      backgroundColor: props.mode === "dark" ? "#212529" : "white",
      color: props.mode === "light" ? "black" : "white",
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
              className="text-body-Secondary"
                style={{
                  color:
                    props.mode === "light"
                      ? "rgb(138 147 157 / 75%)"
                      : "#adb5bd"
                }} 
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
                props.mode === "light" ? "dark" : "primary"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;