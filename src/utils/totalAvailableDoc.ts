import { io } from "socket.io-client";
import { apiUrl } from "../utils/apiUrl";

export const socket = io(`${apiUrl}`);



