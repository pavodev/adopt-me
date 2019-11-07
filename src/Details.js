import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

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

  state = { loading: true, showModal: false }; // using new javascript class-properties

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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;

    /*
      ThemeContext.Container -> this is the way to use Context when working
      with classes. The arrow function return an array with the hooks we've
      defined into the App.js
    */
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {themeHook => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div className="buttons">
                <h1>Would you like to adopt {name}?</h1>
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={this.adopt}
                >
                  Of course!
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={this.toggleModal}
                >
                  No thanks..
                </button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// const Details = props => {
//   return <h1>HI LOL</h1>;
// };
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
