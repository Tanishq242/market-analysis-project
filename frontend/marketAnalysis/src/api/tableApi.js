import api from "./axios";

export const fetchTable = async () => {
    const response = await api.get("/table");
    return response.data;
};