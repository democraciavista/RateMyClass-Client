import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';
import { TestComponent } from './TestComponent';

// Criação de um QueryClient isolado para os testes
const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false, // Não tentar novamente no erro
                staleTime: 0
            }
        }
    });

describe('TestComponent - Teste de Integração', () => {
    it('deve exibir o título corretamente', () => {
        render(
            <QueryClientProvider client={createTestQueryClient()}>
                <TestComponent />
            </QueryClientProvider>
        );

        expect(screen.getByText('Bem-vindo(a)')).toBeInTheDocument();
    });

    it('deve exibir uma mensagem de carregamento antes dos dados aparecerem', async () => {
        render(
            <QueryClientProvider client={createTestQueryClient()}>
                <TestComponent />
            </QueryClientProvider>
        );

        expect(screen.getByText('Carregando...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
        });
    });

    it('deve exibir uma mensagem de erro quando a API falhar', async () => {
        // Simula erro na API
        server.use(http.get('/api/users', () => HttpResponse.error()));

        render(
            <QueryClientProvider client={createTestQueryClient()}>
                <TestComponent />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(
                screen.getByText(/Erro ao carregar usuários/i)
            ).toBeInTheDocument();
        });
    });
});
