import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeScreen from '../../src/app/page';

describe('WelcomeScreen', () => {
    it('deve renderizar o título de boas-vindas', () => {
        render(<WelcomeScreen />);

        const titleElement = screen.getByText('Bem-vindo(a)');
        expect(titleElement).toBeInTheDocument();
    });

    it('deve renderizar os links rápidos', () => {
        render(<WelcomeScreen />);

        const tailwindLink = screen.getByText('Tailwind');
        const githubLink = screen.getByText('GitHub');
        const shadcnLink = screen.getByText('Shadcn');

        expect(tailwindLink).toBeInTheDocument();
        expect(githubLink).toBeInTheDocument();
        expect(shadcnLink).toBeInTheDocument();
    });
});
