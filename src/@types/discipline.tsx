interface DisciplineType {
    id: string;
    code: string;
    name: string;
    professor: string;
    center: string;
    period?: number;
    hours: number;
    course: string;
    type: 'MANDATORY' | 'ELECTIVE_FREE' | 'ELECTIVE_PROFILE';
    statistics?: {
        id: string;
        disciplineId: string;
        totalReviews: number;
        averageGrades: number;
        averageTeachingScore: number;
        averageDifficulty: number;
        dropoutRate: number;
        disciplineScore: number;
        approvalRate: number;
    };
    reviews?: {
        id: string;
        disciplineId?: string;
        userId: string;
        reviewId?: string;
        materialId?: string;
        reactionType: 'LIKE' | 'FAVORITE' | 'REPORT';
    }[];
}

export type { DisciplineType };
