import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer1: {
                answer: '',
                correct: true
            },
            answer2: {
                answer: '',
                correct: false
            },
            answer3: {
                answer: '',
                correct: false
            },
            answer4: {
                answer: '',
                correct: false
            }
        }
        this.addQuestion = this.addQuestion.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    addQuestion() {
        axios.post('//localhost:4001/api/questions', {
                question: this.state.question,
                answers: [
                    this.state.answer1, 
                    this.state.answer2, 
                    this.state.answer3, 
                    this.state.answer4
                ]
        }).then(response => {
            // Prévoir modal d'erreur
            console.log(response);
        })
    }

    updateState(e) {
        // dégueu pour l'instant
        switch(e.target.name) {
            case 'question':
                this.setState({ question: e.target.value })
                break;
            case 'answer1':
                this.setState({ answer1: {answer: e.target.value, correct: true }})
                break;
            case 'answer2':
                this.setState({ answer2: {answer: e.target.value, correct: false }})
                break;
            case 'answer3': 
                this.setState({ answer3: {answer: e.target.value, correct: false }})
                break;
            case 'answer4':
                this.setState({ answer4: {answer: e.target.value, correct: false }})
                break;
            default:
                console.log('non');
                break;
        }
    }

    render() {
        return (
            <div id="addQuestion">
                <input type="text" name="question" id="question" onChange={this.updateState}/>
                <label>Type here the correct answer <input type="text" name="answer1" onChange={this.updateState}/></label>
                <label>Then type here wrong answers
                <input type="text" name="answer2" onChange={this.updateState}/></label>
                <input type="text" name="answer3" onChange={this.updateState}/>
                <input type="text" name="answer4" onChange={this.updateState}/>
                <input type="submit" onClick={this.addQuestion} />
            </div>
        )
    }
}

export default Form;