import { render } from "@testing-library/react";
import React, { Component, useEffect, useState } from "react";
import Nav from "./component/Nav";
import SearchArea from "./component/SearchArea";
import MovieList from "./component/MovieList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] }); //spreading all content from this array to our movies array
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchArea
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default App;
