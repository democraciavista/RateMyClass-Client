'use client';
import { Filter, Plus, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { InputSearch } from '../atom/input-search';
import { Control, useForm } from 'react-hook-form';
import { usePopUp } from '@/hooks/usePopup';
import FiltrerMaterial from './filtrer-material';
import { useEffect, useState } from 'react';
import { useFiltrer } from '@/app/context/filtres-context';

type FormData = {
    search: string;
    curso: string[];
    discipline: string;
    professor: string;
};
function SearchMaterial({ isFavorite }: { isFavorite?: boolean }) {
    const {
        materialFiltrers,
        materialFavoriteFiltrers,
        setMaterialFiltrers,
        setMaterialFavoriteFiltrers
    } = useFiltrer();

    const { control, handleSubmit, watch, setValue } = useForm<FormData>({
        defaultValues: {
            search: isFavorite
                ? materialFavoriteFiltrers.title
                : materialFiltrers.title,
            curso: isFavorite
                ? materialFavoriteFiltrers.curso
                : materialFiltrers.curso,
            discipline: isFavorite
                ? materialFavoriteFiltrers.disciplina
                : materialFiltrers.disciplina,
            professor: isFavorite
                ? materialFavoriteFiltrers.professor
                : materialFiltrers.professor
        }
    });

    const { open, setOpen, handleOpen } = usePopUp();
    const [hasFilters, setHasFilters] = useState(false);
    const filters = watch();

    useEffect(() => {
        const hasAnyFilter = Object.keys(filters).some((key) => {
            if (key !== 'search') {
                if (Array.isArray(filters[key as keyof FormData])) {
                    return filters[key as keyof FormData].length > 0;
                }
                return filters[key as keyof FormData] !== '';
            }
        });
        setHasFilters(hasAnyFilter);
    }, [filters]);

    function handleSubmitForm() {
        handleSubmit((data) => {
            if (isFavorite) {
                setMaterialFavoriteFiltrers({
                    title: data.search,
                    curso: data.curso,
                    disciplina: data.discipline,
                    professor: data.professor
                });
                return;
            }
            setMaterialFiltrers({
                title: data.search,
                curso: data.curso,
                disciplina: data.discipline,
                professor: data.professor
            });
        })();
    }

    return (
        <div className="flex gap-2 mb-8">
            <InputSearch
                control={control as unknown as Control}
                name="search"
                placeholder="Buscar por nome do material"
            />
            <Button
                className="bg-blueDark hover:bg-blue-600"
                onClick={handleSubmitForm}
            >
                <Search className="mr-2 h-4 w-4" />
                Buscar
            </Button>
            <Button
                onClick={handleOpen}
                variant="outline"
                className="flex items-center"
            >
                <Filter
                    className={`mr-2 h-4 w-4 ${hasFilters ? 'fill-black text-black' : ''}`}
                />
                Filtros
            </Button>

            <FiltrerMaterial
                onSubmit={handleSubmitForm}
                open={open}
                setOpen={setOpen}
                control={control}
                setValue={setValue}
                watch={watch}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export { SearchMaterial };
