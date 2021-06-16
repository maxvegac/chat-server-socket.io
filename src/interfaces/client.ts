import {Socket} from "socket.io";

export interface Client extends Socket {
    nickname?: string;
    modes?: string;
    email?: string;
}