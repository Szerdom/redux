console.log("Hi!");

const app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
};

const firstTemplate = (
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

let count = 0;
const addOne = () => {
    count++;
    console.log('add One');
    renderCounter();
};
const minusOne = () => {
    count--;
    console.log('minus one');
    renderCounter();
};
const reset = () => {
    count = 0;
    console.log('reset');
    renderCounter();
};
const show = () => {
    console.log(count);
    renderCounter();
};

var appRoot = document.getElementById('app');

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={show}>show</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounter();