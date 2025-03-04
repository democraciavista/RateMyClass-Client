import React from 'react';
import { test, expect } from '@playwright/test';

test('deve exibir o título de boas-vindas na página inicial', async ({
    page
}) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Bem-vindo/);

    await expect(page.getByText('Bem-vindo(a)')).toBeVisible();
});
