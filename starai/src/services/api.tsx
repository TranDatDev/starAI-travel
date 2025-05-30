import axios, { AxiosInstance } from 'axios';

export const accommodationApi = axios.create({
    baseURL: import.meta.env.VITE_PLACE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const restaurantApi = axios.create({
    baseURL: import.meta.env.VITE_PLACE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const attractionApi = axios.create({
    baseURL: import.meta.env.VITE_PLACE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const locationApi = axios.create({
    baseURL: import.meta.env.VITE_PLACE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const userApi = axios.create({
    baseURL: import.meta.env.VITE_USER_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
});

export const authApi = axios.create({
    baseURL: import.meta.env.VITE_USER_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const GENERAL_API_INSTANCES: Record<string, AxiosInstance> = {
    accommodation: accommodationApi,
    restaurant: restaurantApi,
    attraction: attractionApi,
};

export const fetchDetail = async (category: string, id: string) => {
    try {
        const apiInstance = GENERAL_API_INSTANCES[category];
        if (!apiInstance) throw new Error('Invalid category');

        const response = await apiInstance.get(`/api/v1/public/${category}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${category} detail:`, error);
        throw error;
    }
};
