import api from "../../../lib/axios";
import { handleApiError } from "../../../lib/errorHandler";

export const getCloudProducts = async (category) => {
    try {
        const response = await api.get(`api/cloud/${category}`, {
        });

        console.log(response)
        return response;
        
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
