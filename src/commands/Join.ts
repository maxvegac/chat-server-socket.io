import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'join'
const description = 'Allows to a client to join a room'

interface IncommingEvent {
    destination: string;
    password?: string;
}

export default class Join extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

