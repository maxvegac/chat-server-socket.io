import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'me'
const description = 'Allows to a client to act in a room or user'

interface IncommingEvent {
    destination: string;
    message: string;
}

export default class Me extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

