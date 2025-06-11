export const getAccessToken = () => {
    return localStorage.getItem("access_token");
};

export const saveAccessToken = (access_token) => {
    return localStorage.setItem("access_token", access_token);
};

export const saveRefreshToken = (refresh_token) => {
    return localStorage.setItem("refresh_token", refresh_token);
};
