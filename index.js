const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
}); 

// app.use('/css', express.static(path.join(__dirname, 'output/css')));
app.use(express.static(path.join(__dirname, 'static')));

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        //console.log('message: ' + msg);
        //all but a certain socket
        //socket.broadcast.emit('hi');
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

// io.emit('some event', { for: 'everyone' });

// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });
http.listen(port, function(){
    console.log('listening on *:3000');
});