import React from 'react';
import './ChatHistory.scss'
import MessageItem from "../MessageItem";

export type Message = {
    type: number
    body: string
}

export type Messages = Message[]

interface IProps {
    chatHistory: Messages
}

class ChatHistory extends React.Component<IProps> {
    render(): React.ReactNode {
        const messages = this.props.chatHistory.map((msg, idx) => <MessageItem key={idx} message={msg}/>)
        return (
            <div className='ChatHistory'>
                <h2>Chat History</h2>
                {messages}
            </div>
        )
    }
}

export default ChatHistory