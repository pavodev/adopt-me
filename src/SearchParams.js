import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  //HOOKs
  /*
    In React, all hooks begin with 'use'.
    Hooks never go in ifs or loops.

    onChange: 
        Any time that a change happens, the component will call
        setLocation with anything it is in the input. That's because when i type, 
        a rerender is triggered, SearchParams rerenders.
        'location' is the current state of the field, 'setLocation' is an updater 
        for that piece of state.
  */
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    console.log("animals", animals);

    setPets(animals || []);
  }

  /* 
    useEffect:

        It is disconnected from when the render is happening.
        The function inside it is scheduled to run after the render happens.
        Usually it is used to avoid a slow down of the first render (jsx returned 
        by this component).
        
        If any of the things in the second argument (an array) changes, then this 
        effect will rerun! This argument is required, although the effect is rerun
        too frequently!

        If we want the effet to run only ONCE, the secund argument must be: [] 
        (usefull when we have an initial setup to do, etc.).

        If the second argument is not specified, it runs every time anything updates.

  */
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    });
  }, [animal, setBreed, setBreeds]);

  /* 
    We use the attribute 'className' because in Javascript 'class' is a reserved word 
    and React renames.
  */
  return (
    <div className="search-params">
      <label htmlFor="theme" className="theme-selector">
        Button colors
        <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          onBlur={e => setTheme(e.target.value)}
        >
          <option value="peru">Peru</option>
          <option value="navy">Navy</option>
          <option value="orangered">Orange Red</option>
          <option value="mediumorchid">Medium Orchid</option>
        </select>
      </label>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
