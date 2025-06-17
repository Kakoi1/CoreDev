import api from "@lib/axios";
import { handleApiError } from "@lib/errorHandler";

export const getHardwareProducts = async () => {
    try {
        const response = await api.get(`api/hardware`, {
        });
        return response;
        
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
