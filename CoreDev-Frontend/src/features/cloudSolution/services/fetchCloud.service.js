import api from "@lib/axios"
import { handleApiError } from "@lib/errorHandler";

export const getCloudProducts = async () => {
    try {
        const response = await api.get(`api/cloud`, {
        });

        console.log(response)
        return response;
        
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
