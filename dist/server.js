import * as ws from 'ws';
const server = new ws.Server({ port: 3000 });
const sockets = [];
server.on('connection', (socket) => {
    sockets.push(socket);
    socket.on('message', (data, isBinary) => {
        const message = isBinary ? data : data.toString();
        const obj = JSON.parse(message);
        const params = obj.params;
        switch (obj.method) {
            case "sendID":
                socket.gdtID = params.id;
                break;
            default:
                console.log("Unrecognized method: ", obj.method);
                break;
        }
    });
});
