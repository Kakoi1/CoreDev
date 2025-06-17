import api from "@lib/axios"
import { handleApiError } from "@lib/errorHandler";

export const getSoftwareProducts = async (category) => {
    try {
        const response = await api.get(`api/software`, {
        });

        console.log(response)
        return response;
        
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
