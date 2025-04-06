import { userService } from '@/services';
import { JWT } from 'next-auth/jwt';

export async function refreshToken(token: JWT) {
    const user = await userService.fetchUserById(token.id as string);

    return {
        id: token.id,
        role: user.role,
        course: user.course,
        email: user.email,
        accessToken: token.accessToken
    };
}
