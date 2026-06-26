import api from "./axios";

export const fetchMetadata = async () => {
    const response = await api.get("/metadata");
    return response.data;
};