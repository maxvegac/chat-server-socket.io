import {Command} from "./Command"
import {Context} from "../interfaces/context";

const eventName = 'msg'
const description = 'Allows to a client to message a room or user'

interface IncommingEvent {
    destination: string;
    message: string;
}

export default class Msg extends Command {
    constructor(context: Context) {
        super(eventName, description, context.client, context.server, context.logger)
    }

    process(data: IncommingEvent) {
        this.logger.debug(this.eventName, 'data received:', data)
        return {"data": data}
    }
}

