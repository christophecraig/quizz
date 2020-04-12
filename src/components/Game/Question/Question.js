import React from 'react';

class Question extends React.Component {
    render() {
        return (
            <h2>{this.props.question}</h2>
        )
    }
}

export default Question;