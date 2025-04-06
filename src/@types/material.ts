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

interface ParamsGetMaterial {
    title?: string | undefined;
    disciplina?: string | undefined;
    curso?: string[] | undefined;
    professor?: string | undefined;
    ordem?: 'asc' | 'desc' | undefined;
    ordemBy?: string | undefined;
}

interface PostMaterialType {
    title: string;
    link: string;
    userId: string;
    disciplineId: string;
}
type ParamsGetMaterialFavorite = ParamsGetMaterial & {
};
type UpdateMaterialType = Partial<PostMaterialType>;

export type {
    MaterialType,
    ParamsGetMaterial,
    PostMaterialType,
    ParamsGetMaterialFavorite,
    UpdateMaterialType
};
