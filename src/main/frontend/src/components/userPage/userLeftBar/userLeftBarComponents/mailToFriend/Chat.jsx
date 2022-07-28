import React, {useEffect, useState} from 'react';
import "./Chat.css"
import {Button, FormControl, InputGroup} from "react-bootstrap";
import axios from "axios";


const Chat = (props) => {
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        axios.get(`http://localhost:8080/mail_to_friend/messages/${props.friend.id}`,
            {headers: {"Authorization": `Bearer ${sessionStorage.getItem("token")}`}})
            .then(res => {
                setMessages(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    };

    useEffect(() => {
        (async () => getMessages())()
    }, [])

    useEffect(() => {
        (async () => getMessages())()
    }, [props])

    const [messageText, setMessageText] = useState("")

    const sendMessageInChat = () => {
        axios.post(
            "http://localhost:8080/mail_to_friend/new_message_in_chat", {
                messageText: messageText,
                toUserId: props.friend.id
            },
            {headers: {"Authorization": `Bearer ${sessionStorage.getItem("token")}`}})
            .then((() => refreshMessage()));
    }

    const refreshMessage = async () => {
        setMessageText("");
        const result = await fetch(`http://localhost:8080/mail_to_friend/messages/${props.friend.id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                }
            })

        const newMessage = await result.json();
        setMessages(newMessage)
    }


    return (
        <div>
            <div style={{border: "4px solid orange", height: "500px", marginLeft: "20px", display: "block", position: "unset", overflowY: "auto", paddingBottom: "6%"}}>
                {messages.map((message, index) => {
                    if (message.toUser.id.toString() === sessionStorage.getItem("userId")) {
                        return <div className="left-side-message" key={index}>
                            <div className="date-position-box">
                                <div className="left-side-nickname">{props.friend.nickName}</div>
                                <div className="left-message-in-chat">{message.messageText}</div>
                            </div>
                            <div className="date-position-left">{message.dateTimeOfSending}</div>
                        </div>
                    } else if (message.fromUser.id.toString() === sessionStorage.getItem("userId")) {
                        return <div className="right-side-message" key={index} id={index.toString()+"scroll"}>
                            <div className="date-position-box">
                                <div className="right-message-in-chat">{message.messageText}</div>
                                <div className="right-side-nickname">Me</div>
                            </div>
                            <div className="date-position-right">{message.dateTimeOfSending}</div>
                        </div>
                    }
                })}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    bottom: 5,
                    position: "absolute",
                    width: "70%"
                }}>
                    <InputGroup style={{width: "100%", marginLeft: "5%"}}>
                        <FormControl
                            className="message-input"
                            as="input"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                    </InputGroup>
                    <Button variant={"warning"} onClick={() => sendMessageInChat()}>Send</Button>
                </div>
            </div>
        </div>
    );
};

export default Chat;