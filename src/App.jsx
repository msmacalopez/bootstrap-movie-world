import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Display from "./Components/Display.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      {/* NavBar Section  */}
      <NavBar />
      {/* Hero Section  */}
      <Hero />
      {/* Display Section  */}
      <Display />
    </div>
  );
}

export default App;
