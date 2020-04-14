import React from 'react';
import Answer from './Answer/Answer';
import { Row } from 'reactstrap';
import './Answers.css';

class Answers extends React.Component {
    render() {
        // Randomize order of appearance, can be improved but will be enough for now
        const answers = this.props.answers.sort(function() {
            return 0.5 - Math.random();
        });
        return (
            <Row>
                {answers.map(answer => {
                    return <Answer 
                    key={answer.id} 
                    incrementScore={this.props.incrementScore} 
                    nextQuestion={this.props.nextQuestion} 
                    correct={answer.correct} 
                    answer={answer.answer} />
                })}
            </Row>
        )
    }
}

export default Answers;