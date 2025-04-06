'use client';
import { httpClient } from '@/infrastructure/httpClient';
import { DisciplineType } from '@/@types';
import {
    DisciplineTypeFull,
    ParamsGetDiscipline,
    ParamsGetDisciplineFavorite
} from '@/@types/discipline';

export const disciplineService = {
    async fetchAllDisciplines(
        params: ParamsGetDiscipline
    ): Promise<DisciplineType[]> {
        const response = await httpClient.get('discipline', { params });
        return response.data;
    },
    async fetchAllDisciplineFavorites(
        params: ParamsGetDisciplineFavorite,
        userId: string
    ): Promise<DisciplineType[]> {
        const response = await httpClient.get(`discipline/favorite/${userId}`, {
            params
        });
        return response.data;
    },
    async fetchDisciplineById(id: string): Promise<DisciplineTypeFull> {
        const response = await httpClient.get(`discipline/${id}`);
        return response.data;
    }
};
