'use strict';

console.log("Hi!");

var app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
};

var firstTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? "Here you are" : "None"
    )
);
var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

var user = {
    name: 'Dominik',
    age: 24
    //location: 'GDA'
};
var newTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Dominik'
    ),
    React.createElement(
        'p',
        null,
        'Age: 24'
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(firstTemplate, appRoot);
