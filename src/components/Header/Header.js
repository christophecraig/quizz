import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Le<span className="highlight">Q</span>uizz.</h1>
            </header>
        )
    }
}

export default Header;