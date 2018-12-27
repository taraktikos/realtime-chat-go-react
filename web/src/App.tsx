import React, {Component} from 'react';
import {connect, sendMsg} from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import {Message, Messages} from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput";

interface IProps {
}

interface IState {
    chatHistory: Messages
}

class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            chatHistory: []
        }
    }

    send(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            sendMsg(event.currentTarget.value)
            event.currentTarget.value = "";
        }
    }

    componentDidMount(): void {
        connect((msg: Message) => {
            console.log("new message")
            this.setState(prevState => ({
                chatHistory: [...prevState.chatHistory, msg]
            }))
            console.log(this.state)
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <ChatHistory chatHistory={this.state.chatHistory}/>
                <ChatInput send={this.send}/>
            </div>
        );
    }
}

export default App;
