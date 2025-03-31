import { restaurantApi } from '@/services/api';

export const fetchRestaurants = async (page: number, limit: number) => {
    const response = await restaurantApi.get('/restaurant', {
        params: { page, limit },
    });
    return response.data;
};
