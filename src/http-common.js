import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.0.19:8000",
    headers: {
        "Content-type": "application/json"
    }
});