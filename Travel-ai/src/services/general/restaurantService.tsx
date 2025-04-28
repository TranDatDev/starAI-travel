import { restaurantApi } from '@/services/api';
import { RestaurantFilter } from '../types/restaurant-filter';
export const fetchRestaurants = async (page: number, limit: number) => {
    const response = await restaurantApi.get('/restaurant', {
        params: { page, limit },
    });
    console.log('Restaurant response:', response.data);
    return response.data;
};

export const fetchRestaurantsByFilter = async (filters: RestaurantFilter) => {
    try {
        const response = await restaurantApi.get('/restaurant', {
            params: filters,
        });
        console.log('Filtered restaurant response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurants with filters:', error);
        throw error;
    }
};
