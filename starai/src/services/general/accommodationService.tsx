import { accommodationApi } from '@/services/api';
import { AccommodationFilter } from '../types/accommodation-filter';
export const fetchAccommodations = async (page: number, limit: number) => {
    const response = await accommodationApi.get('/accommodation', {
        params: { page, limit },
    });
    console.log('Accommodation response:', response.data);
    return response.data;
};

export const fetchAccommodationsByFilter = async (filters: AccommodationFilter) => {
    try {
        console.log('Fetching accommodations with filters:', filters);
        const response = await accommodationApi.get('/accommodation', {
            params: filters,
        });
        console.log('Accommodation response:', response);
        console.log('Filtered accommodation response data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching accommodations with filters:', error);
        throw error;
    }
};
