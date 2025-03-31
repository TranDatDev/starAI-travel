import { attractionApi } from '@/services/api';

export const fetchAttractions = async (page: number, limit: number) => {
    const response = await attractionApi.get('/attraction', {
        params: { page, limit },
    });
    return response.data;
};
