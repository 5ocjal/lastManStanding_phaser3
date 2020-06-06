const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const port = 8080;

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/dist', express.static(__dirname + '/dist'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, function () {
    console.log('Listening on --> localhost:' + server.address().port);
});

server.lastPlayderID = 0;

io.on('connection', function (socket) {

    socket.on('newplayer', function () {

        socket.player = {
            id: server.lastPlayerID++,
            x: randomInt(100, 400),
            y: randomInt(100, 400)
        };
        socket.emit('allplayers', getAllPlayers());
        socket.broadcast.emit('newplayer', socket.player);

    });
});

// function getAllPlayers() {
//     var players = [];
//     Object.keys(io.sockets.connected).forEach(function (socketID) {
//         var player = io.sockets.connected[socketID].player;
//         if (player) players.push(player);
//     });
//     return players;
// }

// function randomInt(low, high) {
//     return Math.floor(Math.random() * (high - low) + low);
// }