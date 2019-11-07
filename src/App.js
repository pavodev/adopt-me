import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// LAZY
// with lazy, Details is imported only when it is going to be rendered
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

// SUSPENSE
// Displays something till the content is rendered

const App = () => {
  // if we want to pass multiple entries with context, the best thing to do
  // is to pass an object -> useState({theme: "navy", flag: true})
  const themeHook = useState("navy");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// Rendering to the DOM, we also say where we want App to be rendered
// render(<App />, document.getElementById("root"));
export default App;
