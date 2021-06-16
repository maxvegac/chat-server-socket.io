import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'mode'
const description = 'Allows to a client to change the modes from a client, room or client in a room'

interface IncommingEvent {
    destination: string;
    modes: string;
    arguments: string[];
}

export default class Mode extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

