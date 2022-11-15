import * as ws from 'ws';
import * as http from 'http';
import GDTSocket from './socket';
import * as utils from './utils'

const server = new http.Server()
const wss = new ws.WebSocketServer({ server });

const sockets = []

console.log("Server is running on *:3000")
wss.on('connection', (socket: GDTSocket) => {
	const id = utils.makeID(5)
	socket.gdtID = id
	socket.send(utils.makeIDTemplate(id))
	sockets.push(socket)

    socket.on('message', (data, isBinary) => {
		const message = isBinary ? data : data.toString();
		const obj = JSON.parse(<string>message)
		const params = obj.params
		switch (obj.method) {
			default:
				console.log("Unrecognized method: ", obj.method)
				break
		}
	});
});

server.listen(3000)
