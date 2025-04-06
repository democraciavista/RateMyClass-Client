import { PostReviewType, ReviewType, UpdateReviewType } from '@/@types/review';
import { httpClient } from '@/infrastructure/httpClient';

export const reviewService = {
    async createReview(data: PostReviewType) {
        await httpClient.post('review', data);
    },
    async updateReview(id: string, data: UpdateReviewType) {
        await httpClient.patch(`review/${id}`, data);
    },
    async deleteReview(id: string) {
        await httpClient.delete(`review/${id}`);
    },
    async getReviewById(id: string): Promise<ReviewType> {
        const response = await httpClient.get(`review/${id}`);
        return response.data;
    }
};
