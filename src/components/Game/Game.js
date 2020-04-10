import React from 'react';
import axios from 'axios';
import { url } from '../../config';
import { Link } from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        axios.get(`${url}/total`).then(response => {
            this.setState({ count: response.data.count })
        }, err => {
            console.log(err)
        });
    }

    fetchQuestions() {
        // Random 10 ids between 0 and count (à voir aussi si le premier Id n'est pas de 1, ça tombe à l'eau...)
        
        // Requête sur /api/play en passant en paramètres de la query le tableau des ids obtenus ci-dessus

        // À partir des couples {questions / 4 réponses} obtenus, les stocker dans le state

        // Afficher 1 par 1 --> Bouton suivant et incrémentation de this.state.score si la réponse est bonne

        // Prévoir la fin quand on arrive au bout du tableau
    }

    render() {
        return(
            <div id="game">
                <p>Le jeu dispose actuellement de {this.state.count} questions. N'hésitez pas à <Link to="/form">en ajouter</Link> vous-même!</p>
                <button class="button-play" onClick={this.fetchQuestions}>Jouer</button>
            </div>
        );
    }
};

export default Game;