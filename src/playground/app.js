class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: [this.props.options]
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
            }
        }
        catch (e) {
            //Do Nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleAddOption(value){
        if(!value){
            return 'no value';
        } else if (this.state.options.indexOf(value) > -1){
            return 'value exists';
        }
        
        this.setState((prevState) => ({
            options: [...prevState.options, value]
        }));
    }

    handleDeleteOptions(){
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }));
    }

    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const rndValue = this.state.options[random];
        alert(rndValue);
    }

    render() {
        const title = 'tytul';
        const subtitle = 'podtytul';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption options={this.state.options}
                        handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOption}
                onClick={props.handlePick}>
            What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Add options</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(value);

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render (){
        return(
            <div>
                {this.state.error && <h1>{this.state.error}</h1>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >Remove</button>
        </div>
    );
}

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));