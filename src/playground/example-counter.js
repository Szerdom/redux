
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