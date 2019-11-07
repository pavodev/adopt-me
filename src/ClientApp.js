import React from "react";

/*
    is a special function, it is like render, but what it's saying
    it is that: I expect to be markup already in this place, just take over
    what's there, don't rerender.
    Render, instead, would say: rerender whatever it's in there, blow away
    everything
*/
import { hydrate } from "react-dom";
import App from "./App";

// any other browser-only things,
// this part is not gonna get run in the browser
hydrate(<App />, document.getElementById("root"));
