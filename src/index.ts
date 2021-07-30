import * as dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import { Client } from "./interfaces/client";
import { Logger } from "tslog";
const logger: Logger = new Logger({ name: "Server", displayLoggerName: true });

import * as commands from "./commands";

dotenv.config({ path: `${__dirname}/../.env` });

const httpServer = createServer();
const io = new Server(httpServer, {  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }});


io.on("connection", async (socket: Client) => {
  socket.onAny((eventName: string, data: any) => {
    const eventNameCapitalized = `${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`
    if(eventNameCapitalized in commands)  {
      const command: any = new (commands as any)[eventNameCapitalized]({ client: socket, server: io, logger });
      logger.debug("Command", eventName, "loaded", "for client", socket.id);
      command.process(data.body)
    }
  });
});

httpServer.listen(process.env.SOCKETIO_PORT, () => {
  logger.debug('Listening on port', process.env.SOCKETIO_PORT);
});

process.stdin.resume();
process.on('SIGINT', () => {
  logger.debug('Interrupted');
  process.exit();
});