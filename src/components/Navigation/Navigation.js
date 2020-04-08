import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.changePage(e.target.innerText)
    }

    render() {
        return (
            <nav>
                <ul>
                    <li onClick={this.handleClick}>Home</li>
                    <li onClick={this.handleClick}>Form</li>
                    <li onClick={this.handleClick}>Play</li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;