import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/form" component={Form} />
                    <Route path="/play" component={Game} />
                    <Navigation />
                </Router>
            </div>
        );
    }
}

export default App;
