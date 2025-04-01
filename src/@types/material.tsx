interface MaterialType {
    id: string;
    title: string;
    link: string;
    userId: string;
    disciplineId: string;
    discipline: {
        id: string;
        code: string;
        name: string;
        professor: string;
        center: string;
        period?: number;
        hours: number;
        course: string;
        type: 'MANDATORY' | 'ELECTIVE_FREE' | 'ELECTIVE_PROFILE';
    };
    reviewsLike?: {
        id: string;
        disciplineId?: string;
        userId: string;
        reviewId?: string;
        materialId?: string;
        reactionType: 'LIKE';
    }[];
    reviewsFavorite?: {
        id: string;
        disciplineId?: string;
        userId: string;
        reviewId?: string;
        materialId?: string;
        reactionType: 'FAVORITE';
    }[];
    reviewsReport?: {
        id: string;
        disciplineId?: string;
        userId: string;
        reviewId?: string;
        materialId?: string;
        reactionType: 'REPORT';
    }[];
    reviewsLikeCount: number;
}

export type { MaterialType };
