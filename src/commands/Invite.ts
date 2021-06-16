import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'invite'
const description = 'Allows to a client to invite another client to a room, sometimes bypassing the password lock or other modes for that room'

interface IncommingEvent {
    destination: string;
    message?: string;
}

export default class Invite extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process(data: IncommingEvent) {
        return {"data": data}
    }
}

