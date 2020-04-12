import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav id="nav-container">
                <ul id="nav-list">
                    <NavLink className="nav-item" activeClassName="selected" exact to='/'>Home</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" exact to="/play">Play</NavLink>
                    <NavLink className="nav-item" activeClassName="selected" exact to="/form">Form</NavLink>
                </ul>
            </nav>
        )
    }
}

export default Navigation;