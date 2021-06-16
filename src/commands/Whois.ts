import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'whois'
const description = 'Allows to a client to get information from other client'

interface IncommingEvent {
    nickname: string;
}

export default class Whois extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

