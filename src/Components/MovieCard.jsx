import React from "react";
// import movieImg from "../assets/movie.jpg";

export default function MovieCard({
  searchedMovie,
  handleOnDelete,
  handleOnAddToTheList,
}) {
  console.log("searched Movie", searchedMovie);

  const { Poster, Title, imdbRating, Plot, categ } = searchedMovie;

  return (
    <div className="movie-card row p-3 rounded-4 d-flex justify-content-center align-items-center">
      <div className="movie-card-image col">
        <img src={Poster} alt={Title} />
      </div>
      <div className="movie-card-info col me-2 text-start">
        <h3>{Title?.slice(0, 10)}...</h3>
        <small>Imdb: {imdbRating}</small>
        <p>{Plot?.slice(0, 80)}...</p>
        {!categ ? (
          <div className="buttons d-flex justify-content-between gap-2">
            <button
              className="btn btn-warning px-3 flex-grow-1"
              onClick={() => {
                handleOnAddToTheList("drama");
              }}
            >
              Drama
            </button>
            <button
              className="btn btn-info px-3 flex-grow-1"
              onClick={() => {
                handleOnAddToTheList("action");
              }}
            >
              Action
            </button>
          </div>
        ) : null}
        <button
          onClick={() => handleOnDelete(searchedMovie.imdbID)}
          className="btn btn-danger w-100 mt-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
