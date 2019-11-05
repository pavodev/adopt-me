import React, { useState } from "react";

const SearchParams = () => {
  //HOOK
  /*
    In React, all hooks begin with 'use'
    
    onChange: 
        Any time that a change happens, the component will call
        setLocation with anything it is in the input. That's because when i type, 
        a rerender is triggered, SearchParams rerenders.
        'location' is the current state of the field, 'setLocation' is an updater 
        for that piece of state.
  */
  const [location, setLocation] = useState("Seattle, WA");

  /* 
    We use 'className' because in Javascript 'class' is a reserved word 
    and React renames it.
  */
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
