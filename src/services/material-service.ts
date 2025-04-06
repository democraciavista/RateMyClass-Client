'use client';
import { httpClient } from '@/infrastructure/httpClient';
import { MaterialType } from '@/@types';
import {
    ParamsGetMaterial,
    ParamsGetMaterialFavorite,
    PostMaterialType,
    UpdateMaterialType
} from '@/@types/material';
import { useAuth } from '@/hooks/useAuth';



export const materialService = {
    async fetchAllMaterials(
        params: ParamsGetMaterial
    ): Promise<MaterialType[]> {
        const response = await httpClient.get('material', { params });
        return response.data;
    },
    async fetchAllMaterialFavorites(
        params: ParamsGetMaterialFavorite, userId:string
    ): Promise<MaterialType[]> {
        const response = await httpClient.get(
            `material/favorite/${userId}`,
            { params }
        );
        return response.data;
    },
    async fetchMaterialById(id: string): Promise<MaterialType> {
        const response = await httpClient.get(`material/${id}`);
        return response.data;
    },
    async createMaterial(data: PostMaterialType): Promise<MaterialType> {
        const response = await httpClient.post('material', data);
        return response.data;
    },
    async updateMaterial(
        id: string,
        data: UpdateMaterialType
    ): Promise<MaterialType> {
        const response = await httpClient.patch(`material/${id}`, data);
        return response.data;
    },
    async deleteMaterial(id: string): Promise<void> {
        await httpClient.delete(`material/${id}`);
    },
};
