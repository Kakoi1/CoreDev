import api from "../../../lib/axios";
import { handleApiError } from "../../../lib/errorHandler";

export const getClientsByCategory = async (category) => {
    try {
        const response = await api.get(`api/clients/${category}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
