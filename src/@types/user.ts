interface UserType {
    email: string;
    password: string;
    course: string;
    role: string;
    id: string;
}

type UserDetailType = UserType & {
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
};

interface PostUserType {
    email: string;
    password: string;
    course: string;
}

interface VerifyEmailType {
    token: string;
    email: string;
}

type verifyPasswordType = VerifyEmailType & {
    newPassword: string;
};

type UpdateUserType = Partial<PostUserType>;

export type {
    UserDetailType,
    UserType,
    PostUserType,
    UpdateUserType,
    VerifyEmailType,
    verifyPasswordType
};
