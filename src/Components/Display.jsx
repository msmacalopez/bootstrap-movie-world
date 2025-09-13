import React from "react";
import MovieCard from "./MovieCard.JSX";

export default function Display({ movieList }) {
  console.log(movieList);
  return (
    <div className="display-section p-3">
      <div className="top-buttons mb-1">
        <button className="btn btn-primary rounded-0 rounded-start ">
          All
        </button>
        <button className="btn btn-danger rounded-0 ">Action</button>
        <button className="btn btn-warning rounded-0 rounded-end">Drama</button>
      </div>
      <p className="counting text-white">8 movies</p>
      <div className="display-moviecard d-flex flex-wrap justify-content-center align-items-center">
        {movieList.map((item, index) => (
          <div className="movie-" key={index}>
            <MovieCard
              searchedMovie={item}
              // handleOnDelete,
              // handleOnAddToTheList
            />
          </div>
        ))}
      </div>
    </div>
  );
}
