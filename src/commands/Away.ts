import {Command} from "./Command"
import {Context} from "../interfaces/context";
const eventName = 'msg'
const description = 'Allows to a client to set his status to away'


export default class Away extends Command {
    constructor(context: Context) {
         super(eventName, description, context.client, context.server, context.logger)
    }
    process() {
        return {"data": "none"}
    }
}

