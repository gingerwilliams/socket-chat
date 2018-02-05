#Socket.io Chat Application

1. npm install
2. npm start in the command line

Todo
- Broadcast a message to connected users when someone connects or disconnects
- Add support for nicknames
-  Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
- Add “{user} is typing” functionality
- Show who’s online
- Add private messaging
- Share your improvements!

- https://socket.io/
- https://socket.io/docs/server-api/
- https://socket.io/docs/client-api/
- https://github.com/socketio/chat-example.git

##Heroku Deployment
1. heroku git:remote -a digitalconduct-chat
2. git commit -am "message"
3. git push heroku master

- if errors: heroku logs --tail
