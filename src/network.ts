import * as ws from 'ws';
export default class Network {
	private url: string
	private id: string
	public socket: ws.WebSocket
	
	constructor(url: string) {
		this.url = url
		
		this.socket = new ws.WebSocket(url)

		this.socket.once("message", (data: ws.RawData) => {
			const msg = JSON.parse(<string><unknown>data)

			if (!("method" in msg)) {
				console.error("GDT: Received invalid network request.")
			}
			if (msg.method !== "sendID") {
				console.error("GDT: Received wrong network request.")
			}
			
			this.id = msg.params[0]
		})
	}

	
}