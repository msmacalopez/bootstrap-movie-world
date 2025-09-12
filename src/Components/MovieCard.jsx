import React from "react";
import movieImg from "../assets/movie.jpg";

export default function MovieCard() {
  return (
    <div className="movie-card row p-3 rounded-4 d-flex justify-content-center align-items-center">
      <div className="movie-card-image col">
        <img src={movieImg} alt="" />
      </div>
      <div className="movie-card-info col me-2 text-start">
        <h3>Movie Name</h3>
        <small>Imdb: 5.5</small>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, alias.
        </p>
        <div className="buttons d-flex justify-content-between">
          <button className="btn btn-warning px-3">Drama</button>
          <button className="btn btn-info px-3">Action</button>
        </div>
        <button className="btn btn-danger w-100 mt-2">Delete</button>
      </div>
    </div>
  );
}
