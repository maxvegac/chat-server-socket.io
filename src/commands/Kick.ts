import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'kick'
const description = 'Allows to a client that is operator or moderator in a room to kick other client from that room'

interface IncommingEvent {
    destination: string;
    message?: string;
}

export default class Kick extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

