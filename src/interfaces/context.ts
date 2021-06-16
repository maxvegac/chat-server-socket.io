import {Server} from "socket.io";
import {Client} from "./client"
import { Logger } from "tslog";

export interface Context {
    server: Server;
    client: Client;
    logger: Logger;
}