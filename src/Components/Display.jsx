import React, { useEffect } from "react";
import MovieCard from "./MovieCard.JSX";

export default function Display({ movieList, handleOnDeleteMovie }) {
  console.log("Movie List", movieList);

  //Array of List "Action" or "Drama"
  const [displayCategList, setDisplayCategList] = React.useState([]);

  //Page is render already, so to re-render every time you add new movie in Hero section:
  //dependency: it will re-render Dispay every time movieList changes
  useEffect(() => {
    setDisplayCategList(movieList);
  }, [movieList]);

  function handleOnFilter(filterCateg) {
    // alert(mycategory);
    if (filterCateg === "all") {
      return setDisplayCategList(movieList);
    }
    const filteredList = movieList.filter((movie) => {
      return movie.mycategory === filterCateg;
    });
    console.log("filteredList", filteredList);
    setDisplayCategList(filteredList);
  }

  return (
    <div className="display-section p-3">
      <div className="top-buttons mb-1">
        <button
          onClick={() => {
            handleOnFilter("all");
          }}
          className="btn btn-primary rounded-0 rounded-start "
        >
          All
        </button>
        <button
          onClick={() => {
            handleOnFilter("action");
          }}
          className="btn btn-danger rounded-0 "
        >
          Action
        </button>
        <button
          onClick={() => {
            handleOnFilter("drama");
          }}
          className="btn btn-warning rounded-0 rounded-end"
        >
          Drama
        </button>
      </div>
      <p className="counting text-white">{displayCategList.length} Movies</p>
      <div className="display-moviecard d-flex flex-wrap justify-content-center align-items-center">
        {/* movieList.map -->replace by displayList */}
        {displayCategList.map((item, index) => (
          <div className="" key={index}>
            <MovieCard
              searchedMovie={item}
              handleOnDelete={handleOnDeleteMovie}
              // handleOnDelete,
              // handleOnAddToTheList
            />
          </div>
        ))}
      </div>
    </div>
  );
}
