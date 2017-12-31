import React from 'react';
import PropTypes from 'prop-types'

export default function MessageView({message}) {
        return(
            <div className="container">
                <div className="from">
                    <span className="label">From: </span>
                    <span className="value">Harun Richards</span>
                </div>
                <div className="status">
                    <span className="label">Status: </span>
                    <span className="value"> Unread</span>
                </div>
                <div className="message">
                    <span className="label">Message: </span>
                    <span className="value">Have a great day!</span>
                </div>
            </div>
        );
    }

MessageView.PropTypes = {
    message: PropTypes.object.isRequired
}