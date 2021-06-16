import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'topic'
const description = 'Allows to a client that is operator or moderator in a room to set the topic for that room'

interface IncommingEvent {
    roomName: string;
    message: string;
}

export default class Topic extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

