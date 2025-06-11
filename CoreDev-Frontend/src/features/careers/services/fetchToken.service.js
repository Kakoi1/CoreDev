import { saveAccessToken } from "../lib/token";
import api from "../lib/apiInterceptor";

export const getToken = async () => {
    try {
        const response = await api.post("/api/token", {
            site: "https://coredev.ph",
            slug: "coredev-solutions-inc",
        });
        saveAccessToken(response.data.token);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
