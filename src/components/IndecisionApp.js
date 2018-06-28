import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleAddOption = (value) => {
        if(!value){
            return 'no value';
        } else if (this.state.options.indexOf(value) > -1){
            return 'value exists';
        }
        
        this.setState((prevState) => ({
            options: [...prevState.options, value]
        }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }));
    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const rndValue = this.state.options[random];
        this.setState(() => ({
            selectedOption: rndValue
        }));
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
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
