const io = require('socket.io', { transports: ['websocket'] })();

io.set('origins', '*:*');

let messageHistory = [];

io.on('connection', (client) => {
  console.log('client connected');
  client.emit('messageHistory', messageHistory);

  client.on('sendMessage', (message) => {
    messageHistory = [...messageHistory, message];
    client.emit('messageHistory', messageHistory);
    console.log(messageHistory);
  });

  client.on('disconnect', () => {
    console.log('client disconnected');
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
