import { userService } from '@/services';
import { refreshToken } from '@/utils/refresh-token';
import { loginSchema } from '@/validations/login-schema';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                const parsedCredentials = loginSchema.safeParse(credentials);

                if (!parsedCredentials.success) {
                    throw new Error('Invalid credentials');
                }
                const { email, password } = parsedCredentials.data;
                const { accessToken, user } = await userService.session({
                    email,
                    password
                });

                return {
                    ...user,
                    accessToken
                };
            }
        })
    ],
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
        signOut: '/auth/login',
        newUser: '/auth/cadastro'
    },
    callbacks: {
        async jwt({ token, user, trigger }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.course = user.course;
                token.email = user.email;
            }
            if (trigger === 'update') {
                token = (await refreshToken(token)) as {
                    id: string;
                    role: string;
                    course: string;
                    email: string;
                };
            }

            return token;
        },

        async session({ session, token }: { session: any; token: any }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.course = token.course;
                session.user.email = token.email;
            }
            return session;
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET || 'hjgdjhsgadhgsdajgsda'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
