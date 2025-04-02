'use client';
import React, { useState } from 'react';
import { FormField } from '../molecules/form-field';
import { Label } from '../ui/label';
import { TextareaField } from '../molecules/textarea-field';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const DisciplineEvaluationForm = () => {
    const [formData, setFormData] = useState({
        curso: '',
        codigo: '',
        passouDePrimeira: false,
        suaMediaFinal: '',
        disciplina: '',
        periodoPagou: '',
        notaDisciplina: '',
        didaticaProfessor: '',
        cargaHoraria: '',
        professor: '',
        decisivoCadeira: '',
        nivelDificuldade: '',
        comentario: '',
        recomendacao: ''
    });

    const handleChange = (name: string, value: string | number | boolean) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    id="curso"
                    label="Curso"
                    placeholder="Engenharia"
                    value={formData.curso}
                    onChange={handleChange}
                />
                <FormField
                    id="codigo"
                    label="Código"
                    placeholder="Código"
                    value={formData.codigo}
                    onChange={handleChange}
                />
                <div className="space-y-2 flex flex-col">
                    <Label id="passouDePrimeira">Passou de Primeira</Label>
                    <Checkbox
                        id="passouDePrimeira"
                        checked={formData.passouDePrimeira}
                        onClick={(e) => {
                            setFormData((prev) => ({
                                ...prev,
                                passouDePrimeira: !prev.passouDePrimeira
                            }));
                        }}
                    />
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <TextareaField
                    id="comentario"
                    label="Comente sobre a disciplina"
                    value={formData.comentario}
                    onChange={handleChange}
                />
                <TextareaField
                    id="recomendacao"
                    label="Recomendação para quem vai pagar essa cadeira"
                    value={formData.recomendacao}
                    onChange={handleChange}
                />
            </div>

            <div className="mt-6 flex justify-end">
                <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600"
                >
                    Criar
                </Button>
            </div>
        </form>
    );
};

export default DisciplineEvaluationForm;
