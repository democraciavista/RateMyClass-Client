interface PostReviewType {
    disciplineId: string;
    userId: string;
    passedFirstTry: boolean;
    finalGrade: number;
    professorTeachingScore: number;
    periodPaid: string;
    droppedOut: boolean;
    difficultyLevel: number;
    disciplineScore: number;
    comment: string;
    recommendation: string;
}

interface ReviewType {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    disciplineId: string;
    wentToRecovery: boolean;
    failedBefore: boolean;
    userId: string;
    passedFirstTry: boolean;
    finalGrade: number;
    professorTeachingScore: number;
    periodPaid: string;
    droppedOut: boolean;
    difficultyLevel: number;
    disciplineScore: number;
    comment: string;
    recommendation: string | null;
}

type UpdateReviewType = Partial<PostReviewType>;

export type { ReviewType, PostReviewType, UpdateReviewType };
