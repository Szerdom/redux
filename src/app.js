console.log("Hi!");

var newTemplate = (
    <div>
        <h1>Dominik</h1>
        <p>Age: 24</p>
        <p>Location: GDA</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(newTemplate, appRoot);