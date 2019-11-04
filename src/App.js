const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese")
    ]);
}


// createElement is 
/*
    App is like a rubber stamp. It allows as to stamp its content as many
    times we want. Every time we use app, a div is stamper (created) and inside 
    of it an h1 is created.
    Inside the curly brackets we put the attributes we want the div to have.
*/
const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
}

// Rendering to the DOM, we also say where we want App to be rendered
ReactDOM.render(React.createElement(App), document.getElementById("root"));