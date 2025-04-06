import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });
    console.log(request.nextUrl.pathname);

    const isAuthenticated = !!token;
    const isAuthPage =
        request.nextUrl.pathname.startsWith('/auth/login') ||
        request.nextUrl.pathname.startsWith('/auth/cadastro') ||
        request.nextUrl.pathname.startsWith('/auth/autenticar') ||
        request.nextUrl.pathname.startsWith('/auth/esqueceu-senha') ||
        request.nextUrl.pathname.startsWith('/auth/nova-senha');

    if (isAuthPage) {
        if (isAuthenticated) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    if (!isAuthenticated) {
        const url = new URL('/auth/login', request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)']
};
