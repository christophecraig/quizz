import React from 'react';
import axios from 'axios';
import Emoji from 'a11y-react-emoji';
import { Input, Form as RSForm, FormGroup, Button } from 'reactstrap';
import { url } from '../../config';
import './Form.css';


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
        };
        this.addQuestion = this.addQuestion.bind(this);
        this.updateState = this.updateState.bind(this);
        // this.onCloseModal = this.onCloseModal.bind(this);
        // this.onOpenModal = this.onOpenModal.bind(this);
    }

    addQuestion() {
        let answers = [];
        if (this.state.answer1.answer.length > 3 &&
            this.state.answer2.answer.length > 3 &&
            this.state.answer3.answer.length > 3 &&
            this.state.answer4.answer.length > 3) {
            answers = [
                this.state.answer1,
                this.state.answer2,
                this.state.answer3,
                this.state.answer4
            ];
            axios.post(`${url}/questions`, {
                question: this.state.question,
                answers: answers
            }).then(response => {
                this.clearForm();
                alert('parfait, merci!')
            }, err => {
                console.log(err);
            })
        } else {
            alert('applique toi !')
        }
    }

    clearForm() {
        this.setState({
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
        });
        console.log('normalement, les states sont clear')
    }

    updateState(e) {
        // dégueu pour l'instant
        switch (e.target.name) {
            case 'question':
                this.setState({ question: e.target.value });
                break;
            default:
                this.setState({ [e.target.name]: { answer: e.target.value, correct: true } });
                break;
        }
    }

    render() {
        return (
            <RSForm>
                <FormGroup>
                    <h3>Ta question <Emoji symbol="❓" label="question" /></h3>
                    <Input name="question" 
                    placeholder="Comment s'appelle le chien dans Lucky Luke ?" 
                    value={this.state.question}
                    onChange={this.updateState} />
                </FormGroup>

                <FormGroup>
                    <h3>La bonne réponse <Emoji symbol="✅" label="ok" /></h3>
                    <Input name="answer1" 
                    value={this.state.answer1.answer} 
                    onChange={this.updateState} />
                </FormGroup>

                <FormGroup>
                    <h3>Les mauvaises réponses, pour piéger les concurrents! <Emoji symbol="😏" label="espieglerie" /></h3>
                    <Input name="answer2" 
                    value={this.state.answer2.answer} 
                    onChange={this.updateState} />
                    <Input name="answer3" 
                    value={this.state.answer3.answer} 
                    onChange={this.updateState} />
                    <Input name="answer4" 
                    value={this.state.answer4.answer} 
                    onChange={this.updateState} />
                </FormGroup>

                <FormGroup>
                    <Button onClick={this.addQuestion} color="primary">Ajouter</Button>
                </FormGroup>
            </RSForm>
        )
    }
}

export default Form;