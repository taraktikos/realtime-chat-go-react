import React from 'react';
import './ChatInput.scss'

interface IProps {
    send: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

class ChatInput extends React.Component<IProps> {
    render() {
        return (
            <div className='ChatInput'>
                <input onKeyDown={(e) => this.props.send(e)}/>
            </div>
        )
    }
}

export default ChatInput
