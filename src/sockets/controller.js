import io from "socket.io-client";

const API = 'http://192.168.56.1:3000';

export default io(API, {
    transports: ['websocket'],
    jsonp: false
});