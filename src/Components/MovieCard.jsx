import React from "react";
import movieImg from "../assets/movie.jpg";

export default function MovieCard({ searchedMovie }) {
  //console.log(searchedMovie);
  const { Poster, Title, imdbRating, Plot } = searchedMovie;
  return (
    <div className="movie-card row p-3 rounded-4 d-flex justify-content-center align-items-center">
      <div className="movie-card-image col">
        <img src={Poster} alt={Title} />
      </div>
      <div className="movie-card-info col me-2 text-start">
        <h3>{Title}</h3>
        <small>Imdb: {imdbRating}</small>
        <p>{Plot?.slice(0, 80)}...</p>
        <div className="buttons d-flex justify-content-between">
          <button className="btn btn-warning px-3">Drama</button>
          <button className="btn btn-info px-3">Action</button>
        </div>
        <button className="btn btn-danger w-100 mt-2">Delete</button>
      </div>
    </div>
  );
}
