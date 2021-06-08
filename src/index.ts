import * as dotenv from "dotenv";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

dotenv.config({ path: __dirname+'/../.env' });

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on("connection", (socket: Socket) => {
  console.log('new connection')
});

httpServer.listen(process.env.SOCKETIO_PORT, () => {
  console.log('Listening on port', process.env.SOCKETIO_PORT)
});

process.stdin.resume();
process.on('SIGINT', function() {
  console.log('Interrupted');
  process.exit();
});
