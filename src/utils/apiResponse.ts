import axios from "axios"


export const apiResponse =axios.create({
    baseURL: "http://localhost:8000/client/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization" : "Bearer"
    }
})

export default apiResponse;