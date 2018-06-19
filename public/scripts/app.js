'use strict';

console.log("Hi!");

var app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: []
};

var removeOptions = function removeOptions() {
    app.options = [];
    renderTemplate();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
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
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove ALL'
        ),
        React.createElement('ol', null),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(firstTemplate, appRoot);
};
renderTemplate();
