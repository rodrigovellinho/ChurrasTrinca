import axios from "axios";

export const api = axios.create({
    baseURL: "https://json-server-churras-trinca.vercel.app/",
});
