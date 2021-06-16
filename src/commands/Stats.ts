import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'stats'
const description = 'Allows to a client to get information from the network'

interface IncommingEvent {
    nickname: string;
}

export default class Stats extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        this.logger.debug("networkStats", {clientsCount: this.server.engine.clientsCount});
        this.client.emit('networkStats', {clientsCount: this.server.engine.clientsCount})
    }
}

