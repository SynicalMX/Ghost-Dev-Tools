const express = require('express');
const ws = require('ws')
const wsServer = new ws.Server({ noServer: true });

const sockets = []

wsServer.on('connection', (socket) => {
	sockets.push(socket)
  	socket.on('message', (data, isBinary) => {
		const message = isBinary ? data : data.toString();
		const obj = JSON.parse(message)
		const params = obj.params
		switch (obj.method) {
			case "sendID":
				socket.gdtID = params.id
				break
			default:
				console.log("Unrecognized method: ", obj.method)
				break
		}
	});
});

const app = express();

app.use(express.static(__dirname + '/site'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/site/page.html')
});

app.get('/payload', (req, res) => {
  res.sendFile(__dirname + '/payload.js')
});

const server = app.listen(3000, () => {
  console.log('server started');
});
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});
