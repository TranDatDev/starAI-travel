import { attractionApi } from '@/services/api';
import { AttractionFilter } from '../types/attraction-filter';
export const fetchAttractions = async (page: number, limit: number) => {
    const response = await attractionApi.get('/api/v1/public/attraction', {
        params: { page, limit },
    });
    console.log('Attraction response:', response.data);
    return response.data;
};

export const fetchAttractionsByFilter = async (filters: AttractionFilter) => {
    try {
        const response = await attractionApi.get('/api/v1/public/attraction', {
            params: filters,
        });
        console.log('Filtered attraction response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching attractions with filters:', error);
        throw error;
    }
};
