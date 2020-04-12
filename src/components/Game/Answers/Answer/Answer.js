import React from 'react';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.getAttribute('correct') === '1') {
            this.props.incrementScore();
        } else {
            this.props.nextQuestion();
        }
    }

    render() {
        return (
            <div className="answer" onClick={this.handleClick} correct={this.props.correct}>{this.props.answer}</div>
        )
    }
}

export default Answer;