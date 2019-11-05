import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

/*
    App is like a rubber stamp. It allows as to stamp its content as many
    times we want. Every time we use app, a div is stamper (created) and inside 
    of it an h1 is created.
    Inside the curly brackets we put the attributes we want the div to have.
*/
const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};

// Rendering to the DOM, we also say where we want App to be rendered
render(React.createElement(App), document.getElementById("root"));
