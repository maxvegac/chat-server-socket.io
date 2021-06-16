import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'nick'
const description = 'Allows to a client to change a his/her nickname'

interface IncommingEvent {
    nickname: string;
}

export default class Nick extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

