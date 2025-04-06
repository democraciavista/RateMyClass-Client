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
import { useState } from 'react';

function Filtrer<T extends FieldValues>({
    open,
    setOpen,
    control,
    error,
    setValue,
    watch,
    handleSubmit,
    onSubmit
}: {
    onSubmit?: () => void;
    open: boolean;
    setOpen: (value: boolean) => void;
    control: Control<T>;
    error?: boolean;
    setValue: (name: keyof T, value: any) => void;
    watch: () => any;
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
}) {
    const [selectedValue, setSelectedValue] = useState<number>(0);

    const filters = watch();

    function clearFilters() {
        setValue('professor', '');
        setValue('curso', []);
        setValue('centro', []);
        setValue('periodo', []);
        setValue('tipo', '');
        setValue('codigo', '');
        setSelectedValue(0);
    }
    const handleAdd = (
        type: 'curso' | 'centro' | 'periodo',
        value: string | number
    ) => {
        const currentValues = filters[type];
        if (type === 'periodo' && typeof value === 'number') {
            setValue(type, [...(currentValues as number[]), value as number]);
        } else {
            setValue(type, [...(currentValues as string[]), value as string]);
        }
    };

    const handleRemove = (
        type: 'curso' | 'centro' | 'periodo',
        value: string | number
    ) => {
        if (type === 'periodo') {
            setValue(
                type,
                filters[type].filter((item: number) => item !== value)
            );
        } else {
            setValue(
                type,
                filters[type].filter((item: string) => item !== value)
            );
        }
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
                    <div className="space-y-2">
                        <Label>Código</Label>
                        <Controller
                            name={'codigo' as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    placeholder="Digite o código"
                                    {...field}
                                />
                            )}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Período</Label>
                        <Controller
                            name={'periodo' as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="number"
                                    placeholder="Digite o período"
                                    value={selectedValue}
                                    onChange={(e) => {
                                        field.onChange(Number(e.target.value));
                                        setSelectedValue(
                                            Number(e.target.value)
                                        );
                                    }}
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === 'Enter' &&
                                            selectedValue > 0
                                        ) {
                                            e.preventDefault();
                                            handleAdd('periodo', selectedValue);
                                            field.onChange(0);
                                            setSelectedValue(0);
                                        }
                                    }}
                                />
                            )}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {filters.periodo.map((period: number) => (
                                <Badge
                                    key={period}
                                    onClick={() =>
                                        handleRemove('periodo', period)
                                    }
                                    className="cursor-pointer"
                                >
                                    {period} ✕
                                </Badge>
                            ))}
                        </div>
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
                            {filters.curso.map((curso: string) => (
                                <Badge
                                    key={curso}
                                    onClick={() => handleRemove('curso', curso)}
                                    className="cursor-pointer"
                                >
                                    {curso} ✕
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Centro</Label>
                        <Controller
                            name={'centro' as Path<T>}
                            control={control}
                            render={() => (
                                <Select
                                    onValueChange={(value) =>
                                        handleAdd('centro', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o centro" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="centro1">
                                            Centro 1
                                        </SelectItem>
                                        <SelectItem value="centro2">
                                            Centro 2
                                        </SelectItem>
                                        <SelectItem value="centro3">
                                            Centro 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {filters.centro.map((centro: string) => (
                                <Badge
                                    key={centro}
                                    onClick={() =>
                                        handleRemove('centro', centro)
                                    }
                                    className="cursor-pointer"
                                >
                                    {centro} ✕
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Tipo</Label>
                        <Controller
                            name={'tipo' as Path<T>}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o tipo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tipo1">
                                            Tipo 1
                                        </SelectItem>
                                        <SelectItem value="tipo2">
                                            Tipo 2
                                        </SelectItem>
                                        <SelectItem value="tipo3">
                                            Tipo 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
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

export default Filtrer;
