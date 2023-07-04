import axios from "axios";
export default axios.create({
    baseURL: import.meta.env.VITE__AUTH_URL,
    headers: {
        "Content-type": "application/json"
    },
    withCredentials: true
});
