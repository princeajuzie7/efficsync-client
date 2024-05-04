import axios from "axios"


export const apiResponse = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_LIVE_URL
      : process.env.NEXT_PUBLIC_LOCAL_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Authorization" : "Bearer"
  },
});

export default apiResponse; 