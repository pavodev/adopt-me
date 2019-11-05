import React from "react";

/*
    Props
*/
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed)
//     ]);
// }

/*
    Destructuring props
*/
export default function Pet({ name, animal, breed }) {
  // The curly braces indicate a javascript expression
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
