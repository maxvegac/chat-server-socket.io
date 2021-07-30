import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'quit'
const description = 'Allows to a client to quit the chat session'

interface IncommingEvent {
    message: string;
}

export default class Quit extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        this.client.disconnect()
    }
}

