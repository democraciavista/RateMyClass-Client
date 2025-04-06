import path from 'path';

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

interface ParamsGetDiscipline {
    code?: string | undefined;
    name?: string | undefined;
    professor?: string | undefined;
    course?: string[] | undefined;
    center?: string[] | undefined;
    period?: number[] | undefined;
    type?: 'MANDATORY' | 'ELECTIVE_PROFILE' | 'ELECTIVE_FREE' | undefined;
    ordem?: 'asc' | 'desc' | undefined;
    ordemBy?: string | undefined;
}

type DisciplineTypeFull = DisciplineType & {
    reviews: {
        update: string;
        periodPaid: number;
        rating: number;
        comment: string;
        recommendation: string;
        likes: number;
        likeId: string;
        reportId: string;
    }[];
    ratingDistribution: {
        stars: string;
        percentage: number;
        color: string;
    }[];
    semesterData: {
        semester: string;
        rating: number;
    }[];
};

type ParamsGetDisciplineFavorite = ParamsGetDiscipline & {};

export type {
    DisciplineTypeFull,
    DisciplineType,
    ParamsGetDiscipline,
    ParamsGetDisciplineFavorite
};
