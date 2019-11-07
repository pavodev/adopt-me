import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const App = () => {
  // if we want to pass multiple entries with context, the best thing to do
  // is to pass an object -> useState({theme: "navy", flag: true})
  const themeHook = useState("navy");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// Rendering to the DOM, we also say where we want App to be rendered
render(<App />, document.getElementById("root"));
