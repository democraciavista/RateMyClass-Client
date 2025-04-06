import { httpClient } from '@/infrastructure/httpClient';
import {
    PostUserType,
    UserDetailType,
    UserType,
    VerifyEmailType,
    verifyPasswordType
} from '@/@types/user';

export const userService = {
    createUser: async (data: PostUserType): Promise<UserType> => {
        const response = await httpClient.post('user', data);
        return response.data;
    },
    verifyEmail: async (data: VerifyEmailType) => {
        await httpClient.post(`user/verify-email`, data);
    },
    verifyPassword: async (data: verifyPasswordType) => {
        await httpClient.post(`user/verify-password`, data);
    },
    resetPassword: async ({ email }: { email: string }) => {
        await httpClient.post(`user/reset-password`, email);
    },
    session: async (data: {
        email: string;
        password: string;
    }): Promise<{
        user: Omit<UserType, 'password'>;
        accessToken: string;
    }> => {
        const response = await httpClient.post('user/session', data);
        return response.data;
    },
    updateUser: async (id: string, data: Partial<PostUserType>) => {
        const response = await httpClient.patch(`user/${id}`, data);
        return response.data;
    },
    fetchUserById: async (id: string): Promise<UserDetailType> => {
        const response = await httpClient.get(`user/${id}`);
        return response.data;
    }
};
