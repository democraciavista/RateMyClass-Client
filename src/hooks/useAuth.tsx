'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useAuth() {
    const { data: session, status, update } = useSession();
    const router = useRouter();

    const isAuthenticated = status === 'authenticated';

    const hasRole = (role: string) => {
        return session?.user.role === role;
    };

    async function updateSession() {
        await update();
    }

    async function login(email: string, password: string) {
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        return res;
    }

    async function logout() {
        await signOut({
            redirect: false
        });
        router.push('/auth/login');
    }
    return {
        isAuthenticated,
        hasRole,
        login,
        logout,
        session,
        updateSession
    };
}
