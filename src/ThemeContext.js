import { createContext } from "react";

/*
    The empty function is a placeholder, it will use this particulare function
    if none is specified.

    ["orangered", () => {}] -> is a hook
*/
const ThemeContext = createContext(["orangered", () => {}]);

export default ThemeContext;
