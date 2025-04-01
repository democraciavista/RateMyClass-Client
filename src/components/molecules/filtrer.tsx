'use client';
import { useState } from 'react';
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

function Filtrer({
    open,
    setOpen
}: {
    open: boolean;
    setOpen: (value: boolean) => void;
}) {
    const [filters, setFilters] = useState<{
        codigo: string;
        periodo: number[];
        professor: string;
        curso: string[];
        centro: string[];
        tipo: string;
    }>({
        codigo: '',
        periodo: [],
        professor: '',
        curso: [],
        centro: [],
        tipo: ''
    });
    const [periodo, setPeriodo] = useState<number>(0);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && periodo > 0) {
            e.preventDefault();
            handleAdd('periodo', periodo);
            setPeriodo(0);
        }
    };
    const handleFilterChange = (
        field: string,
        value: string | number[] | string[]
    ) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };
    function handleAdd(type: keyof typeof filters, value: string | number) {
        if (
            (type === 'curso' || type === 'centro') &&
            typeof value === 'string'
        ) {
            if (filters[type].includes(value)) return;
        }
        if (type === 'periodo' && typeof value === 'number') {
            if (filters.periodo.includes(value)) return;
        }
        setFilters((prev) => ({
            ...prev,
            [type]: [...prev[type], value]
        }));
    }
    function handleRemove(type: keyof typeof filters, value: string | number) {
        if (
            (type === 'curso' || type === 'centro') &&
            typeof value === 'string'
        ) {
            setFilters((prev) => ({
                ...prev,
                [type]: prev[type].filter((item) => item !== value)
            }));
        }
        if (type === 'periodo' && typeof value === 'number') {
            setFilters((prev) => ({
                ...prev,
                [type]: prev[type].filter((item) => item !== value)
            }));
        }
    }

    return (
        <Sheet
            open={open}
            onOpenChange={setOpen}
        >
            <SheetContent className="w-80">
                <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-6">
                    <div className="space-y-2">
                        <Label>Código</Label>
                        <Input
                            type="text"
                            placeholder="Digite o código"
                            value={filters.codigo}
                            onChange={(e) =>
                                handleFilterChange('codigo', e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Período</Label>
                        <Input
                            type="number"
                            placeholder="Digite o período"
                            value={periodo}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setPeriodo(Number(e.target.value))}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {filters.periodo.map((period) => (
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
                        <Input
                            type="text"
                            placeholder="Nome do professor"
                            value={filters.professor}
                            onChange={(e) =>
                                handleFilterChange('professor', e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Curso</Label>
                        <Select
                            onValueChange={(value) => handleAdd('curso', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o curso" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="curso1">Curso 1</SelectItem>
                                <SelectItem value="curso2">Curso 2</SelectItem>
                                <SelectItem value="curso3">Curso 3</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {filters.curso.map((curso) => (
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
                                    centro 1
                                </SelectItem>
                                <SelectItem value="centro2">
                                    centro 2
                                </SelectItem>
                                <SelectItem value="centro3">
                                    centro 3
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {filters.centro.map((centro) => (
                                <Badge
                                    key={centro}
                                    onClick={() =>
                                        handleRemove('centro', centro)
                                    }
                                    className="centror-pointer"
                                >
                                    {centro} ✕
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Tipo</Label>
                        <Select
                            value={filters.tipo}
                            onValueChange={(value) =>
                                handleFilterChange('tipo', value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tipo1">Tipo 1</SelectItem>
                                <SelectItem value="tipo2">Tipo 2</SelectItem>
                                <SelectItem value="tipo3">Tipo 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        onClick={() =>
                            setFilters({
                                codigo: '',
                                periodo: [],
                                professor: '',
                                curso: [],
                                centro: [],
                                tipo: ''
                            })
                        }
                        variant="outline"
                        className="w-full"
                    >
                        Limpar filtros
                    </Button>
                    <Button
                        onClick={() => console.log(filters)}
                        variant="outline"
                        className="w-full"
                    >
                        Buscar
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default Filtrer;
