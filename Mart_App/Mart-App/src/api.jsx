import axios from 'axios';

const api = axios.create({
    baseURL: "https://mart-rug7.onrender.com/api",
});

export default api;