import * as ws from 'ws';
import * as http from 'http';
import * as classes from './classes.js';
import * as utils from './utils.js';

const server = new http.Server();
const wss = new ws.WebSocketServer({ server });

const sockets = [];
const clients = [];

console.log("Server is running on *:3000")
wss.on('connection', (socket: classes.GDTSocket) => {
	const id = utils.makeID(5);
	socket.gdtID = id;
	socket.send(utils.makeTemplate("sendID", id));
	sockets.push(socket);

    socket.on('message', (data, isBinary) => {
		const message = isBinary ? data : data.toString();
		const obj = JSON.parse(<string>message);
		const params = obj.params;
		switch (obj.method) {
			case "connect":
				sockets.forEach((skt) => {
					if (skt.id === params.id) {
						clients.push(socket);
						socket.send(utils.makeTemplate("ready"))
					}
				})
				break;
			default:
				console.log("Unrecognized method: ", obj.method);
				break;
		}
	});
});

server.listen(3000);
