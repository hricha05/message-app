import React, { Component } from 'react';

class NavigationView extends Component {
    render() {
        return (
            <div className="container">
                <ul className="header">
                    <li><a href="/">Home</a></li>
                    <li><a href="/messages/message-list">Messages</a></li>
                </ul>
            </div>
        );
    }
}

export default NavigationView;