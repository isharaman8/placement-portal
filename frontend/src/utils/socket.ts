// client/Socket.js
import io from "socket.io-client";
const ENDPOINT = "https://placements-backend-hackathon.herokuapp.com";
export default io(ENDPOINT);
