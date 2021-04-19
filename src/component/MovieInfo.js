import React from "react";

const MovieInfo = (props) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={props.closeMovieInfo}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <i className="fas fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }}>Go back</span>
      </div>
      <div className="row">
        <div className="col s12 m4">
          {props.currentMovie.poster_path == null ? (
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              }
              alt="Card image"
              style={{ width: "100%", height: 360 }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
              alt="Card image"
              style={{ width: "100%", height: 360 }}
            />
          )}
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <p>{props.currentMovie.title}</p>
            <p>
              {props.currentMovie.release_date
                .substring(5)
                .split("-")
                .concat(props.currentMovie.release_date.substring(0, 4))
                .join("/")}
            </p>
            <p>{props.currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
