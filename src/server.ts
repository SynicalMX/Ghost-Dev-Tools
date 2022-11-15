import * as ws from 'ws';
import * as http from 'http';
import GDTSocket from './socket';

const server = new http.Server()
const wss = new ws.WebSocketServer({ server });

const sockets = []

console.log("Server is running on *:3000")
wss.on('connection', (socket: GDTSocket) => {
	sockets.push(socket)
    socket.on('message', (data, isBinary) => {
		const message = isBinary ? data : data.toString();
		const obj = JSON.parse(<string>message)
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

server.listen(3000)
