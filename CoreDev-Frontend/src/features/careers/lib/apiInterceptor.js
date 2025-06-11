import axios from "axios";
import { getAccessToken,  } from "./token";

const api = axios.create({
    baseURL: "/orangepay-api",
    headers: {
        "Content-Type": "application/json",
        "x-platform": "orange-pay-plus",
    },
});

// Intercept requests to add accessToken
api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers['Authorization'] = `${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
