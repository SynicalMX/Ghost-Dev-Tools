import { WebSocket } from "ws";
export class GDTSocket extends WebSocket {
    constructor(address, protocols, options) {
        super(address, protocols, options);
    }
}
export class GDTClient extends WebSocket {
    constructor(address, protocols, options) {
        super(address, protocols, options);
    }
}
