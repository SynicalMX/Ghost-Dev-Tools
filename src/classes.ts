import { URL } from "url";
import { WebSocket } from "ws";

export class GDTSocket extends WebSocket {
    public gdtID: string

    constructor(address: string|URL, protocols: string|Array<string>, options: unknown) {
        super(address, protocols, options);
    }
}

export class GDTClient extends WebSocket {
    public gdtID: string;

    constructor(address: string|URL, protocols: string|Array<string>, options: unknown) {
        super(address, protocols, options);
    }
}