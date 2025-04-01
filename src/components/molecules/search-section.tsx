'use client';
import { Filter, Plus, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { InputSearch } from '../atom/input-search';
import { useForm } from 'react-hook-form';
import Filtrer from './filtrer';
import { usePopUp } from '@/hooks/usePopup';

function SearchSection() {
    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm();

    const { open, setOpen, handleOpen } = usePopUp();

    return (
        <div className="flex gap-2 mb-8">
            <InputSearch
                control={control}
                name="search"
                placeholder="Buscar produtos, categorias ou marcas"
            />
            <Button
                className="bg-blue-500 hover:bg-blue-600"
                onClick={handleSubmit((data) => console.log(data))}
            >
                <Search className="mr-2 h-4 w-4" />
                Buscar
            </Button>
            <Button
                onClick={handleOpen}
                variant="outline"
                className="flex items-center"
            >
                <Filter className="mr-2 h-4 w-4" />
                Filtros
            </Button>
            <Button
                className="bg-blue-500 hover:bg-blue-600"
                onClick={handleSubmit((data) => console.log(data))}
            >
                <Plus className="mr-2 h-4 w-4" />
                Criar Material
            </Button>

            <Filtrer
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export { SearchSection };
