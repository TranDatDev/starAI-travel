import { locationApi } from '@/services/api';

export const fetchProvinces = async (): Promise<string[]> => {
    try {
        const response = await locationApi.get('/location/provinces');
        return response.data;
    } catch (error) {
        console.error('Error fetching provinces:', error);
        throw error;
    }
};

export const fetchDistricts = async (by?: string): Promise<string[]> => {
    try {
        const response = await locationApi.get('/location/districts', {
            params: by ? { by } : {},
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching districts:', error);
        throw error;
    }
};

export const fetchCommunes = async (by?: string): Promise<string[]> => {
    try {
        const response = await locationApi.get('/location/communes', {
            params: by ? { by } : {},
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching communes:', error);
        throw error;
    }
};
