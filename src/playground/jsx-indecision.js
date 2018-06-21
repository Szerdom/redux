console.log("Hi!");

const app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: ['Item one', 'Item two']
};

const removeOptions = () => {
    app.options = [];
    renderTemplate();
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var appRoot = document.getElementById('app');

const numbers = [55,101, 1000];
const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option);
}

const renderTemplate = () => {
    const firstTemplate = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here you are" : "None"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <br />
            <br />
            <button onClick={removeOptions}>Remove ALL</button>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })
            }
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(firstTemplate, appRoot);
}

renderTemplate();