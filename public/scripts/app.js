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

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('add One');
    renderCounter();
};
var minusOne = function minusOne() {
    count--;
    console.log('minus one');
    renderCounter();
};
var reset = function reset() {
    count = 0;
    console.log('reset');
    renderCounter();
};
var show = function show() {
    console.log(count);
    renderCounter();
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        ),
        React.createElement(
            'button',
            { onClick: show },
            'show'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
