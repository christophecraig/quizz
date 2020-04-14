import React from 'react';
import { Col, Button } from 'reactstrap';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target);
        if (e.target.getAttribute('correct') === '1') {
            this.props.incrementScore();
        } else {
            this.props.nextQuestion();
        }
    }

    render() {
        return (
            <Col xs="12" md="6"><Button block onClick={this.handleClick} correct={this.props.correct}>{this.props.answer}</Button></Col>
        )
    }
}

export default Answer;