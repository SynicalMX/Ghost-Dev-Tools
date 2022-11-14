import { WebSocket } from "ws";
export default class GDTSocket extends WebSocket {
    constructor(address, protocols, options) {
        super(address, protocols, options);
    }
}
