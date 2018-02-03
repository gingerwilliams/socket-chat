const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
}); 

let people = {};

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('join', function(name){
        people[socket.id] = name; //create entry in 'people' with new user
        socket.emit("update", "You have connected to the server.");
        io.sockets.emit("update", name + " has joined the server.");
        io.sockets.emit("update_people_list", people);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected!');
        if(people[socket.id] != ""){
            io.sockets.emit("update", people[socket.id] + " has left the server.");
            delete people[socket.id];
            io.sockets.emit("update_people_list", people);
        }
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.sockets.emit('chat message', people[socket.id], msg);
    });
});

// io.emit('some event', { for: 'everyone' });

// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });
http.listen(port, function(){
    console.log('listening on *:3000');
});