"use strict";

console.log("Hi!");

var newTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Dominik"
    ),
    React.createElement(
        "p",
        null,
        "Age: 24"
    ),
    React.createElement(
        "p",
        null,
        "Location: GDA"
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(newTemplate, appRoot);
