import axios from "axios"


export const apiResponse = axios.create({
  baseURL: "https://efficsync-server.onrender.com/client/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Authorization" : "Bearer"
  },
});

export default apiResponse;