import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanager-csmb-1.onrender.com"
});

export default API;
