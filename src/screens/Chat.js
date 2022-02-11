import React, { useState, useEffect, useCallback, useRef } from 'react';
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat';

// const API = 'http://192.168.56.1:3000';
const API = 'https://cbc1-177-248-163-21.ngrok.io';

export const Chat = (props) => {

    const [messages, setMessages] = useState([]);
    const [hasConnection, setConnection] = useState(false);

    const { chat, userId } = props.route.params;
    const { chatId, members } = chat;

    const socket = useRef();

    const fillMessages = (messages) => {

        setMessages( messages.reverse().map(message => {
            let from = 1;
    
            members.forEach(member => {
                if (member?._id === message.user._id) {
                    from = 2;
                }
            });
    
            return {
                _id: message._id,
                text: message.content,
                createAt: new Date(),
                user: {
                    _id: from,
                    name: message.user.username,
                    avatar: 'https://placeimg.com/140/140/any'
                }
            }
        }));
    };

    useEffect(() => {

        socket.current = io(API, {
            transports: ['websocket'],
            jsonp: false
        });

        socket.current.emit("requestMessages", { chat: chatId });

        socket.current.on("getMessages", (m) => {
            fillMessages(m);
        });

        socket.current.on("revicedMessage", (messages) => {
            fillMessages(messages);
        });

        return () => {
            socket.current.disconnect();
        };

    }, []);

    const onSend = useCallback((messages = []) => {
        const [ message ] = messages;
        socket.current.emit("sendMessage", {
            chat: chatId,
            content: message.text,
            user: userId
        });
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, []);


    return (
        <>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1
        }}></GiftedChat>
        </>
    );
}