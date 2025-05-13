import { userApi } from '@/services/api';

export const getUserDetailById = async (id: string): Promise<any | null> => {
    try {
        const response = await userApi.get(`/api/v1/public/user/${id}`);
        return response.data || null;
    } catch (error) {
        console.error(`Error fetching details for user with ID ${id}:`, error);
        return null;
    }
};

export const getUserAvatarById = async (id: string): Promise<string | null> => {
    try {
        const response = await userApi.get(`/api/v1/public/user/${id}/avatar`);
        return response.data?.avatarUrl || null;
    } catch (error) {
        console.error(`Error fetching avatar for user with ID ${id}:`, error);
        return null;
    }
};

export const changeUserAvatarById = async (id: string, avatarData: FormData): Promise<boolean> => {
    try {
        const response = await userApi.patch(`/api/v1/public/user/${id}/avatar`, avatarData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.status === 200;
    } catch (error) {
        console.error(`Error changing avatar for user with ID ${id}:`, error);
        return false;
    }
};

export const updateUserTheme = async (id: string, theme: string): Promise<boolean> => {
    try {
        console.log('Updating user theme:', { id, theme });
        const response = await userApi.patch(
            `/api/v1/public/user/${id}/theme`,
            {},
            {
                params: { update: theme },
            }
        );
        console.log('Response:', response);
        return response.status === 200;
    } catch (error) {
        console.error(`Error updating theme for user with ID ${id}:`, error);
        return false;
    }
};

export const updateUserLanguage = async (id: string, language: string): Promise<boolean> => {
    try {
        console.log('Updating user language:', id, language);
        const response = await userApi.patch(
            `/api/v1/public/user/${id}/language`,
            {},
            {
                params: { update: language },
            }
        );
        console.log('Response:', response);
        return response.status === 200;
    } catch (error) {
        console.error(`Error updating language for user with ID ${id}:`, error);
        return false;
    }
};
