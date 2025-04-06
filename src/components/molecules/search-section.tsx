'use client';
import { Filter, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { InputSearch } from '../atom/input-search';
import { Control, useForm } from 'react-hook-form';
import Filtrer from './filtrer';
import { usePopUp } from '@/hooks/usePopup';
import { useFiltrer } from '@/app/context/filtres-context';

function SearchSection({ isFavorite }: { isFavorite?: boolean }) {
    const {
        disciplineFiltrers,
        disciplineFavoriteFiltrers,
        setDisciplineFiltrers,
        setDisciplineFavoriteFiltrers
    } = useFiltrer();

    const {
        open: openFilter,
        setOpen: setOpenFilter,
        handleOpen: handleOpenFilter
    } = usePopUp();
    const { control, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            search: isFavorite
                ? disciplineFavoriteFiltrers.name
                : disciplineFiltrers.name,
            curso: isFavorite
                ? disciplineFavoriteFiltrers.course
                : disciplineFiltrers.course,
            professor: isFavorite
                ? disciplineFavoriteFiltrers.professor
                : disciplineFiltrers.professor,
            centro: isFavorite
                ? disciplineFavoriteFiltrers.center
                : disciplineFiltrers.center,
            periodo: isFavorite
                ? disciplineFavoriteFiltrers.period
                : disciplineFiltrers.period,
            tipo: isFavorite
                ? disciplineFavoriteFiltrers.type
                : disciplineFiltrers.type,
            codigo: isFavorite
                ? disciplineFavoriteFiltrers.code
                : disciplineFiltrers.code
        }
    });
    function handleSubmitForm() {
        handleSubmit((data) => {
            if (isFavorite) {
                setDisciplineFavoriteFiltrers({
                    name: data.search,
                    course: data.curso,
                    professor: data.professor,
                    center: data.centro,
                    period: data.periodo,
                    type: data.tipo as
                        | 'MANDATORY'
                        | 'ELECTIVE_PROFILE'
                        | 'ELECTIVE_FREE'
                        | undefined,
                    code: data.codigo
                });
                return;
            }
            setDisciplineFiltrers({
                name: data.search,
                course: data.curso,
                professor: data.professor,
                center: data.centro,
                period: data.periodo,
                type: data.tipo as
                    | 'MANDATORY'
                    | 'ELECTIVE_PROFILE'
                    | 'ELECTIVE_FREE'
                    | undefined,
                code: data.codigo
            });
        });
    }
    return (
        <div className="flex gap-2 mb-8">
            <InputSearch
                control={control as unknown as Control}
                name="search"
                placeholder="Buscar produtos, categorias ou marcas"
            />
            <Button
                className="bg-blueDark hover:bg-blue-600"
                onClick={handleSubmitForm}
            >
                <Search className="mr-2 h-4 w-4" />
                Buscar
            </Button>
            <Button
                onClick={handleOpenFilter}
                variant="outline"
                className="flex items-center"
            >
                <Filter className="mr-2 h-4 w-4" />
                Filtros
            </Button>

            <Filtrer
                onSubmit={handleSubmitForm}
                control={control}
                setValue={setValue}
                watch={watch}
                open={openFilter}
                setOpen={setOpenFilter}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export { SearchSection };
