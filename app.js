var app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http)
require('dotenv').config();

http.listen(process.env.PORT, () => {
    console.log('server start')
})

const dbconn = require('./database/connection');
dbconn();
require('./routes/api')(app)

const ioserver = require('./classes/ioserver');
const server = new ioserver();

io.on('connection', (socket) => {
    console.log('client')
    server.socketemit(socket, io)
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
