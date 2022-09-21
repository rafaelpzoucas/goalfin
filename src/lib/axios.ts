import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.0.104:3333',
    // baseURL: 'http://192.168.6.119:3333',
})