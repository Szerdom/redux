class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: []
        }
    }

    handleAddOption(value){
        if(!value){
            return 'no value';
        } else if (this.state.options.indexOf(value) > -1){
            return 'value exists';
        }
        this.setState((prevState) => {
            return {
                options: [...prevState.options, value]
            }
        });
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
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
                <Options options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}/>
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

/*class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}*/

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

/*class Action extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <button 
                    disabled={!this.props.hasOption}
                    onClick={this.props.handlePick}>
                What should I do?</button>
            </div>
        );
    }
}*/

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
}

/*class Options extends React.Component {
    render (){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}*/

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
        if (error){
            this.setState(() => {
                return { error };
            });
        }
        e.target.elements.option.value = '';
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
        <p>{props.optionText}</p>
    );
}

/*class Option extends React.Component {
    render (){
        return (
            <p>{this.props.optionText}</p>
        );
    }
}*/

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));