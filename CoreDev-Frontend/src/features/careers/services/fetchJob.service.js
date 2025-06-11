import api from "../lib/apiInterceptor";

export const getJobLists = async () => {
    try {
        const response = await api.get("/api/joblists");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
};
