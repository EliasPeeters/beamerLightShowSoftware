const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/controller', (req, res) => {
  res.render('controller', {data})
});

app.get('/beamer', (req, res) => {
    res.render('beamer')
  });

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('signal', (content) => {
        io.emit('signal', content);
    });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


let data = [
    {
        "id": 2,
        "name": "Strobo"
    },
    {
        "id": 1,
        "name": "Kreise"
    },
    {
        "id": 3,
        "name": "Kreise 2"
    },
    {
        "id": 2,
        "name": "Strobo"
    },
    {
        "id": 1,
        "name": "Kreise"
    },
    {
        "id": 3,
        "name": "Kreise 2"
    },
    {
        "id": 2,
        "name": "Strobo"
    },
    {
        "id": 1,
        "name": "Kreise"
    },
    {
        "id": 3,
        "name": "Kreise 2"
    }]