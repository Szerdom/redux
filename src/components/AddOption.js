import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
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