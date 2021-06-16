import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'list'
const description = 'Allows to a client to list all the available channels'

interface IncommingEvent {
    searchQuery: string;
}

export default class List extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

