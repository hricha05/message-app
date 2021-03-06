import React, { Component } from 'react';
import MessageView from './message-view';

class MessageList extends Component {

    state = {
        messages: [
            {
                from: 'Martha',
                content: 'I will be travelling soon',
                status: 'read'
            },
            {
                from: 'Alika',
                content: 'I will see you soon',
                status: 'unread'
            },
            {
                from: 'Cameron',
                content: 'Why did you leave me',
                status: 'read'
            },
            {
                from: 'Harun',
                content: 'I am here',
                status: 'unread'
            }
        ]
    }

    render() {
        const messageViews = this.state.messages.map(function(message, index) {
            return (
            <MessageView key={index} message={message} />
            )
        })
        return (
        <div>
            <h1 className="header">Inbox</h1>
            {messageViews}
        </div>
        )
    }
}

export default MessageList;