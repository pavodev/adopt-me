import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

/*
    CLASS COMPONENTS

    render():
        inheritated from React.Component

    Class components are not compatible with hooks.

    this.props:
        it is immutable!
*/
class Details extends React.Component {
  // constructor(props) {
  //   super(props); //call the constructor on my parent's constructor

  //   // it is self-contained by the class, no one from the outside can access it.
  //   this.state = {
  //     loading: true
  //   };
  // }

  state = { loading: true }; // using new javascript class-properties

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          url: animal.url,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// const Details = props => {
//   return <h1>HI LOL</h1>;
// };

export default Details;
