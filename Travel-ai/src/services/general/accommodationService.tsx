import { accommodationApi } from '@/services/api';

export const fetchAccommodations = async (page: number, limit: number) => {
    const response = await accommodationApi.get('/accommodation', {
        params: { page, limit },
    });
    return response.data;
};
