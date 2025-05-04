import api from "../../../lib/axios";
import { handleApiError } from "../../../lib/errorHandler";

export const getClientsByCategory = async (category, page) => {
    try {
        const response = await api.get(`api/clients/${category}`, {
            params: {
                page,
                per_page: 12,
            },
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};
