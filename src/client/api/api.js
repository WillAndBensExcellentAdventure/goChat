import openSocket from 'socket.io-client';

export const socket = openSocket('http://localhost:8000');

export const sendMessage = (message) => {
  socket.emit('sendMessage', message);
};
