import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import { url } from './config';

  
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            playing: false,
            currentQuestion: 1,
            score: 0
        }
        this.fetchQuestions = this.fetchQuestions.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    fetchQuestions() {
        if (!this.state.questions.length) {    
            axios.get(`${url}/play`).then(response => {
                this.setState({ currentQuestion: 1 });
                this.setState({ score: 0 })
                this.setState({ questions: response.data});
                this.setState({ playing: true });
            }, err => {
                console.log(err)
            }) 
        }
        // Afficher 1 par 1 --> Bouton suivant et incrémentation de this.state.score si la réponse est bonne

        // Prévoir la fin quand on arrive au bout du tableau
    }

    nextQuestion() {
        if (this.state.currentQuestion === this.state.questions.length) {
            this.endGame();
        }
        this.setState({currentQuestion: this.state.currentQuestion + 1});
    }

    incrementScore() {
        this.setState({score: this.state.score + 1});
        this.nextQuestion();
    }

    endGame() {
        this.setState({ playing: false});
        alert(`super, tu as fait ${this.state.score} bonnes réponses sur 10 questions`);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/play" 
                    render={(props) => <Game 
                    playing={this.state.playing} 
                    currentQuestion={this.state.currentQuestion}
                    score={this.state.score}
                    incrementScore={this.incrementScore}
                    nextQuestion={this.nextQuestion}
                    fetchQuestions={this.fetchQuestions} 
                    questions={this.state.questions} />} />
                    <Route exact path="/form" component={Form} />
                    <Navigation />
                </Router>
            </div>
        );
    }
}

export default App;
