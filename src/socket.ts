import { URL } from "url";
import { WebSocket } from "ws";

export default class GDTSocket extends WebSocket {
    public gdtID: string

    constructor(address: string|URL, protocols: string|Array<string>, options: unknown) {
        super(address, protocols, options);
    }
}