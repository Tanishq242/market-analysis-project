import api from "./axios";

export const applyFilters = async (filters) => {
    const response = await api.post("/filter", filters);
    return response.data;
};