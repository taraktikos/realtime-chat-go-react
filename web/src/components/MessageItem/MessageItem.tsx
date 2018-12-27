import React from 'react';
import './MessageItem.scss'
import {Message} from "../ChatHistory/ChatHistory";

interface IProps {
    message: Message
}

class MessageItem extends React.Component<IProps> {
    render() {
        return (
            <div className='Message'>
                {this.props.message.body}
            </div>
        )
    }
}

export default MessageItem
