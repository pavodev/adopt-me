import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

// Rendering to the DOM, we also say where we want App to be rendered
render(<App />, document.getElementById("root"));
