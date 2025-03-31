import axios from 'axios';

console.log('Accommodation API URL:', import.meta.env.VITE_ACCOMMODATION_API_URL);
export const accommodationApi = axios.create({
    baseURL: import.meta.env.VITE_ACCOMMODATION_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const restaurantApi = axios.create({
    baseURL: import.meta.env.RESTAURANT_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const attractionApi = axios.create({
    baseURL: import.meta.env.ATTRACTION_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
