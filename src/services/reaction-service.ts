import { PostReactionType } from '@/@types/reaction';
import { httpClient } from '@/infrastructure/httpClient';

export const reactionService = {
    async createReaction(data: PostReactionType) {
        await httpClient.post('reaction', data);
    },
    async deleteReaction(id: number) {
        await httpClient.delete(`reaction/${id}`);
    },
};
