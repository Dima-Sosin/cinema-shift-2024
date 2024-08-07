import axios from "axios";

export const api = axios.create({
    baseURL: "https://shift-backend.onrender.com"
});

api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;
