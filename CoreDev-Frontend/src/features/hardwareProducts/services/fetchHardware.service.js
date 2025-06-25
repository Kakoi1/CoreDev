import api from "@lib/axios";
import { handleApiError } from "@lib/errorHandler";

export const getHardwareProducts = async (category) => {
    try {
        const response = await api.get(`api/hardware/${category}`, {
        });
        return response;
        
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
