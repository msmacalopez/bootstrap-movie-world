import React from "react";
import MovieCard from "./MovieCard.jsx";
import movieImg from "../assets/movie.jpg";

export default function Hero() {
  const heroStyle = {
    background: `linear-gradient(
        rgba(184, 181, 181, 0.6),
        rgba(184, 181, 181, 0.6)
      ), url(${movieImg}) center / cover no-repeat`,
    height: "70vh",
    width: "100%",
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-container d-flex flex-column justify-content-center align-items-center text-center w-100 h-100">
        <h1>Search Millions of Movies</h1>
        <p>Find the movie you want and add to your personal catalogue.</p>
        <form className="hero-form input-group my-3 w-50" action="">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Superman..."
            aria-label="Movie Name"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-danger" type="button" id="button-addon2">
            Search Movie
          </button>
        </form>
        <div className="hero-result text-dark">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
