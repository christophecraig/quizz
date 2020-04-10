import React from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import Emoji from 'a11y-react-emoji';
import InputText from './Input/InputText';
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
            },
            error: '',
            open: false
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
                console.log(response)
            }, err => {
                console.log(err);
            })
        } else {
            this.setState({ open: true })
            this.setState({ error: 'Revois tes réponses l\'artiste, quelque chose ne va pas !' });
        }
    }

    // Modal handler fuctions
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    updateState(e) {
        // dégueu pour l'instant
        switch (e.target.name) {
            case 'question':
                this.setState({ question: e.target.value })
                break;
            case 'answer1':
                this.setState({ answer1: { answer: e.target.value, correct: true } })
                break;
            case 'answer2':
                this.setState({ answer2: { answer: e.target.value, correct: false } })
                break;
            case 'answer3':
                this.setState({ answer3: { answer: e.target.value, correct: false } })
                break;
            case 'answer4':
                this.setState({ answer4: { answer: e.target.value, correct: false } })
                break;
            default:
                console.log('non');
                break;
        }
    }

    render() {
        return (
            <div id="addQuestion">
                <h3>Ta question <Emoji symbol="❓" label="question" /></h3>
                <div className="form-group">
                    <InputText name="question" placeholder="Comment s'appelle le chien dans Lucky Luke ?" onChange={this.updateState} />
                </div>

                <h3>La bonne réponse <Emoji symbol="✅" label="ok" /></h3>
                <div className="form-group">
                    <InputText name="answer1" onChange={this.updateState} />
                </div>

                <h3>Les mauvaises réponses, pour piéger les concurrents! <Emoji symbol="😏" label="espieglerie" /></h3>
                <div className="form-group">
                    <InputText name="answer2" onChange={this.updateState} />
                    <InputText name="answer3" onChange={this.updateState} />
                    <InputText name="answer4" onChange={this.updateState} />
                </div>

                <button onClick={this.addQuestion} className="button-submit">Ajouter</button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h2>Et non ! <Emoji symbol="😢" label="tristesse" /></h2>
                    <p>{this.state.error}</p>
                </Modal>
            </div>
        )
    }
}

export default Form;