import React from 'react';
import './InputText.css';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e);
    } 

    render() {
        return (
            <input 
            type="text" 
            className="input-text" 
            placeholder={this.props.placeholder} 
            name={this.props.name} 
            id={this.props.id} 
            value={this.props.value}
            onChange={this.handleChange} />
        )
    }
}

export default InputText;