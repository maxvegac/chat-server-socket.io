import {Client} from "../interfaces/client";
import {Server} from "socket.io";
import { Logger } from "tslog";

export class Command {
    eventName: string;
    description: string;
    client: Client;
    server: Server;
    logger: Logger;

    constructor(eventName: string, description: string, client: Client, server: Server, logger: Logger) {
        this.eventName = eventName;
        this.description = description;
        this.client = client;
        this.server = server;
        this.logger = logger.getChildLogger({name: `CommandHandler ${eventName}`});
    }
}