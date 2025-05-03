export const handleApiError = (error) => {
    if (error.response) {
        console.error(
            "API Error:",
            error.response.data.message || error.message
        );
    } else if (error.request) {
        console.error("No response from server. Please check your connection.");
    } else {
        console.error("Unexpected error:", error.message);
    }
};
