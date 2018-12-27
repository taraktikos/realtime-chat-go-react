import {Message} from "../components/ChatHistory/ChatHistory";

const socket = new WebSocket('ws://localhost:8080/ws')

let connect = (cb: (msg: Message) => void) => {
    console.log("Attempting connection")

    socket.onopen = () => {
        console.log("Success connected")
    }

    socket.onmessage = (msg) => {
        console.log("received message:", msg)
        cb(JSON.parse(msg.data))
    }

    socket.onclose = (event) => {
        console.log("Socket closed conn", event)
    }

    socket.onerror = (error) => {
        console.error("Socket error", error)
    }
}

let sendMsg = (msg: string) => {
    console.log("sending msg: ", msg)
    socket.send(msg)
}

export {connect, sendMsg}