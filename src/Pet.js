import React from "react";
import { Link } from "@reach/router";

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
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/400";

  if (media.length) {
    hero = media[0].small;
  }
  // The curly braces indicate a javascript expression
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
}
