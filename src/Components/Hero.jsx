import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard.jsx";
// import movieImg from "../assets/movie.jpg";
import { fetchFromApi } from "../utils/axios.js";
import { randomChar } from "../utils/randomChar.js";

export default function Hero({ addMovieToTheList }) {
  //get the API returned object
  const [searchedMovie, setSearchedMovie] = React.useState({});
  //update the value of the image for Background
  const [bgImg, setBgImg] = React.useState("");
  //To avoid 2ble called of API when refresh
  const shouldFetchRef = useRef(true);
  //to add "ref" in <input/>
  // const searchRef = useRef("");

  //True, when searching, not show the moviecard
  const [searching, setSearching] = React.useState(false);

  useEffect(() => {
    // fetchFromApi();
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  function sendToSearch(formData) {
    const newMovie = formData.get("movie_name");

    //Only if we enter sth we can search
    newMovie ? fetchMovie(newMovie) : null;
  }

  async function fetchMovie(str) {
    const movie = await fetchFromApi(str);
    // console.log(movie);

    //only if return a movie with valid title we change info in screen and Bg
    if (movie.Title.length > 0) {
      setSearchedMovie(movie);
      setBgImg(movie.Poster);
      setSearching(false);
    }
  }

  function handleOnDelete() {
    setSearchedMovie({}); //no need this one i think
    setSearching(true);
  }

  function handleOnAddToTheList(categ) {
    //add to the object returned by API a new attributewhich is category:action or drama
    addMovieToTheList({ ...searchedMovie, mycategory: categ });
    //Then,same than delete
    setSearchedMovie({}); //no need this one i think
    setSearching(true);
  }

  const heroStyle = {
    background: `linear-gradient(
        rgba(184, 181, 181, 0.6),
        rgba(184, 181, 181, 0.6)
      ), url(${bgImg}) center / cover no-repeat`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-container d-flex flex-column justify-content-center align-items-center text-center w-100 h-100 mt-5">
        <div className={searching ? "textform-center" : "textform-top"}>
          {searching && (
            <h1 className="text-light">Search Millions of Movies</h1>
          )}
          {searching && (
            <p className="text-light">
              Find the movie you want and add to your personal catalogue.
            </p>
          )}
          <form
            className="hero-form input-group my-3 w-50"
            action={sendToSearch}
          >
            <input
              // ref={searchRef}
              onFocus={() => {
                setSearching(true);
              }}
              type="text"
              className="form-control"
              placeholder="e.g. Superman..."
              aria-label="Enter Movie Name"
              aria-describedby="button-addon2"
              name="movie_name"
            />
            <button className="btn btn-danger" id="button-addon2">
              Search Movie
            </button>
          </form>
        </div>
        {!searching ? (
          <div className="hero-result showMovie text-dark">
            <MovieCard
              searchedMovie={searchedMovie}
              handleOnDelete={handleOnDelete}
              handleOnAddToTheList={handleOnAddToTheList}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
