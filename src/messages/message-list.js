import { Component } from "../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react";

class MessageList extends Component {

    state = {
        message: {
            from: 'Martha',
            content: 'I will be travelling soon',
            status: 'read'
        }
    }

    render() {
        <div>
            <h1>List of Messages</h1>
            <MessageView message = {
                this.state.message
            } />
        </div>
    }
}

export default MessageList;