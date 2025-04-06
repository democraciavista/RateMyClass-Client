'use client';
import {
    ParamsGetDiscipline,
    ParamsGetDisciplineFavorite
} from '@/@types/discipline';
import {
    ParamsGetMaterial,
    ParamsGetMaterialFavorite
} from '@/@types/material';
import { createContext, useContext, useState, ReactNode } from 'react';

type Filtrers = {
    getMaterial: ParamsGetMaterial;
    getMaterialFavorite: ParamsGetMaterialFavorite;
    getDiscipline: ParamsGetDiscipline;
    getDisciplineFavorite: ParamsGetDisciplineFavorite;
};

type FiltrersContextType = {
    materialFiltrers: Filtrers['getMaterial'];
    setMaterialFiltrers: (filtrers: Filtrers['getMaterial']) => void;
    materialFavoriteFiltrers: Filtrers['getMaterialFavorite'];
    setMaterialFavoriteFiltrers: (
        filtrers: Filtrers['getMaterialFavorite']
    ) => void;
    disciplineFiltrers: Filtrers['getDiscipline'];
    setDisciplineFiltrers: (filtrers: Filtrers['getDiscipline']) => void;
    disciplineFavoriteFiltrers: Filtrers['getDisciplineFavorite'];
    setDisciplineFavoriteFiltrers: (
        filtrers: Filtrers['getDisciplineFavorite']
    ) => void;
};

const FiltrerContext = createContext<FiltrersContextType | undefined>(
    undefined
);

function FiltrerProvider({ children }: { children: ReactNode }) {
    const [materialFiltrers, setMaterialFiltrers] = useState<
        Filtrers['getMaterial']
    >({
        title: undefined,
        disciplina: undefined,
        curso: undefined,
        professor: undefined,
        ordem: undefined,
        ordemBy: undefined
    });
    const [materialFavoriteFiltrers, setMaterialFavoriteFiltrers] = useState<
        Filtrers['getMaterialFavorite']
    >({
        title: undefined,
        disciplina: undefined,
        curso: undefined,
        professor: undefined,
        ordem: undefined,
        ordemBy: undefined
    });
    const [disciplineFiltrers, setDisciplineFiltrers] = useState<
        Filtrers['getDiscipline']
    >({
        code: undefined,
        name: undefined,
        professor: undefined,
        center: undefined,
        period: undefined,
        course: undefined,
        type: undefined
    });
    const [disciplineFavoriteFiltrers, setDisciplineFavoriteFiltrers] =
        useState<Filtrers['getDisciplineFavorite']>({
            code: undefined,
            name: undefined,
            professor: undefined,
            center: undefined,
            period: undefined,
            course: undefined,
            type: undefined
        });

    return (
        <FiltrerContext.Provider
            value={{
                materialFiltrers,
                setMaterialFiltrers,
                materialFavoriteFiltrers,
                setMaterialFavoriteFiltrers,
                disciplineFiltrers,
                setDisciplineFiltrers,
                disciplineFavoriteFiltrers,
                setDisciplineFavoriteFiltrers
            }}
        >
            {children}
        </FiltrerContext.Provider>
    );
}
function useFiltrer() {
    const context = useContext(FiltrerContext);
    if (!context) {
        throw new Error(
            'useFiltrer precisa estar dentro de um FiltrerProvider'
        );
    }
    return context;
}

export { useFiltrer, FiltrerProvider };
