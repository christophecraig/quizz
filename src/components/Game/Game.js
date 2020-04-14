import React from 'react';
import axios from 'axios';
import { url } from '../../config';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Question from './Question/Question';
import Answers from './Answers/Answers';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleFetchQuestions = this.handleFetchQuestions.bind(this);
    }

    componentDidMount() {
        axios.get(`${url}/total`).then(response => {
            this.setState({ count: response.data.count });
        }, err => {
            console.log(err)
        });
    }

    handleFetchQuestions() {
        this.props.fetchQuestions();
    }

    render() {
        const q = this.props.questions[this.props.currentQuestion - 1];
        return (
            <div id="game">
                {!this.props.playing
                    ?
                    <div className="not-playing">
                        <p>Le jeu dispose actuellement de {this.state.count} questions. N'hésitez pas à <Link to="/form">en ajouter</Link> vous-même!</p>
                        <Button size="lg" 
                        onClick={this.handleFetchQuestions}>Jouer</Button>
                    </div>
                    :
                    <div className="playing">
                        <div className="playing-screen">
                            <div className="score">Score : {this.props.score}</div>
                            <h4>Question n°{this.props.currentQuestion}</h4>
                            <Question key={'q_' + q.id} question={q.question} />
                            <Answers key={'atoq_' + q.id} 
                            nextQuestion={this.props.nextQuestion} 
                            incrementScore={this.props.incrementScore}
                            answers={q.answers} />
                        </div>
                    </div>
                }
            </div>

        );
    }
};

export default Game;