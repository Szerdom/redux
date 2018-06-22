class IndecisionApp extends React.Component{
    render() {
        const title = 'tytul';
        const subtitle = 'podtytul';
        const options = ['Jeden', 'dwa', 'trzy'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeOptions = this.removeOptions.bind(this);
    }
    removeOptions(){
        console.log(this.props.options)
    }
    render (){
        return(
            <div>
                <button onClick={this.removeOptions.bind(this)}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class AddOption extends React.Component{
    addOption(e){
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        if(value){
            alert(value);
        }
    }
    render (){
        return(
            <form onSubmit={this.addOption}>
                <input type='text' name='option' />
                <button>Submit</button>
            </form>
        );
    }
}

class Option extends React.Component {
    render (){
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));