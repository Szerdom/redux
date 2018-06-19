console.log("Hi!");

const app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: []
};

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

const renderTemplate = () => {
    const firstTemplate = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here you are" : "None"}</p>
            <p>{app.options.length}</p>
            <ol>
    
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