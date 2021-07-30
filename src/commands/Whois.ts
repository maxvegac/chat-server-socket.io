import {Command} from "./Command"
import {Context} from "../interfaces/context";

const eventName = 'whois'
const description = 'Allows to a client to get information from other client'

interface IncommingEvent {
    nickname: string;
}

export default class Whois extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    async process(data: IncommingEvent) {
        this.logger.debug(this.eventName, 'data received:', data)
        const sockets = await this.server.fetchSockets();

        for (const socket of sockets) {
            if(socket.data.nickname === data.nickname) {
                this.logger.debug(this.eventName, 'emitting event: whois', socket.data)
                this.client.emit('whois', socket.data)
                return;
            }
        }
        this.client.emit('error', {
            message: `nickname ${data.nickname} not found.`,
        })
    }
}

