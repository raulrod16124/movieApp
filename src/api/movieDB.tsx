import axios from "axios";
import { BASE_URL, API_KEY } from "@env";

const baseURL = BASE_URL;
const apiKey = API_KEY;

const movieDB = axios.create({
    baseURL:  baseURL,
    params: {
        api_key: apiKey,
        language: "es-ES"
    }
});

export default movieDB;