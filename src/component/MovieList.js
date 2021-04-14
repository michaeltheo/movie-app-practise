import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie, i) => {
            return (
              <Movie key={i} image={movie.poster_path} /> //for every movie we map we create a movie
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
