import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Display from "./Components/Display.jsx";

function App() {
  //MovieList recives movieObjects [+category]
  const [movieList, setMovieList] = useState([]); //   [{},{},{}]

  function addMovieToTheList(movieObjNcategory) {
    // setMovieList((prevMovie) => [...prevMovie, movieObjFetch_w_category]);
    const tempMovieList = movieList.filter(
      (item) => item.imdbID !== movieObjNcategory.imdbID
    );
    setMovieList([...tempMovieList, movieObjNcategory]);
  }

  function handleOnDeleteMovie(imdbID) {
    // alert("imdbID", imdbID);

    const arrayAfterDelete = movieList.filter((item) => item.imdbID !== imdbID);
    confirm("Are you sure you want to delete this movie from the list?") &&
      setMovieList(arrayAfterDelete);
  }

  return (
    <div className="wrapper">
      {/* NavBar Section  */}
      <NavBar />
      {/* Hero Section  */}
      <Hero addMovieToTheList={addMovieToTheList} />
      {/* Display Section  */}
      <Display
        movieList={movieList}
        handleOnDeleteMovie={handleOnDeleteMovie}
      />
    </div>
  );
}

export default App;
