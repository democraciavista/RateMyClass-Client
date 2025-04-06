'use client';
import {
    Controller,
    Control,
    UseFormHandleSubmit,
    FieldValues,
    Path
} from 'react-hook-form';
import { Input } from '../ui/input';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '../ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';

function FiltrerMaterial<T extends FieldValues>({
    open,
    setOpen,
    control,
    error,
    setValue,
    watch,
    handleSubmit,
    onSubmit
}: {
    open: boolean;
    setOpen: (value: boolean) => void;
    control: Control<T>;
    error?: boolean;
    setValue: (name: keyof T, value: any) => void;
    watch: () => any;
    onSubmit?: () => void;
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
}) {
    const filters = watch();

    function clearFilters() {
        setValue('professor', '');
        setValue('discipline', '');
        setValue('curso', []);
    }

    const handleAdd = (type: 'curso', value: string) => {
        if (filters[type].includes(value)) {
            return;
        }
        const currentValues = filters[type];

        setValue(type, [...(currentValues as string[]), value as string]);
    };

    const handleRemove = (type: 'curso', value: string) => {
        setValue(
            type,
            filters[type].filter((item: string) => item !== value)
        );
    };

    return (
        <Sheet
            open={open}
            onOpenChange={setOpen}
        >
            <SheetContent className="w-80">
                <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <form
                    onSubmit={onSubmit!}
                    className="py-4 space-y-6"
                >
                    {' '}
                    <div className="space-y-2">
                        <Label>Disciplina</Label>
                        <Controller
                            name={'discipline' as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    placeholder="Digite a disciplina"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Professor</Label>
                        <Controller
                            name={'professor' as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    placeholder="Nome do professor"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Curso</Label>
                        <Controller
                            name={'curso' as Path<T>}
                            control={control}
                            render={() => (
                                <Select
                                    onValueChange={(value) =>
                                        handleAdd('curso', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o curso" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="curso1">
                                            Curso 1
                                        </SelectItem>
                                        <SelectItem value="curso2">
                                            Curso 2
                                        </SelectItem>
                                        <SelectItem value="curso3">
                                            Curso 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {Array.isArray(filters.curso) &&
                                filters.curso.map((curso: string) => (
                                    <Badge
                                        key={curso}
                                        onClick={() =>
                                            handleRemove('curso', curso)
                                        }
                                        className="cursor-pointer"
                                    >
                                        {curso} ✕
                                    </Badge>
                                ))}
                        </div>
                    </div>
                    <Button
                        type="button"
                        onClick={clearFilters}
                        variant="outline"
                        className="w-full"
                    >
                        Limpar Filtros
                    </Button>
                    <Button
                        type="submit"
                        variant="outline"
                        className="w-full"
                    >
                        Buscar
                    </Button>
                </form>
            </SheetContent>
        </Sheet>
    );
}

export default FiltrerMaterial;
