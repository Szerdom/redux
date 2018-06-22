class ToggleVisibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide" : "Show"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));