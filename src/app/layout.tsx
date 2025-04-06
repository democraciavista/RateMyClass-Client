import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider, QueryProvider } from '../provider';
import { Toaster } from '@/components/ui/toaster';
import { FiltrerProvider } from './context/filtres-context';

export const metadata: Metadata = {
    title: 'Rate My Class',
    description: 'Avalie seus professores e disciplinas da UFPE'
};
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`${inter.className}`}>
                <AuthProvider>
                    <FiltrerProvider>
                        <QueryProvider>
                            {children}
                            <Toaster />
                        </QueryProvider>
                    </FiltrerProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
