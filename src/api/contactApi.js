import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanager-csmb-2.onrender.com"
});

export default API;
