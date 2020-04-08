import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'Home'
        }
        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        console.log(page)
        this.setState({ currentPage: page })
    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.state.currentPage === 'Home' && <Home />}
                {this.state.currentPage === 'Form' && <Form />}
                <Navigation changePage={this.changePage}/>
            </div>
        );
    }
}

export default App;
