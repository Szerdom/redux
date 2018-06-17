console.log("Hi!");

var app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
};

var firstTemplate = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? "Here you are" : "None"}</p>
    </div>
);
let getLocation = (location) => {
    if(location)
    {
        return <p>Location: {location}</p>;
    }
};

let user = {
    name: 'Dominik',
    age: 24,
    //location: 'GDA'
};
var newTemplate = (
    <div>
        <h1>Dominik</h1>
        <p>Age: 24</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(firstTemplate, appRoot);