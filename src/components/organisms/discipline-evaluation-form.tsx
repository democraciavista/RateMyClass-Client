'use client';
import React, { useEffect, useState } from 'react';
import { FormField } from '../molecules/form-field';
import { Label } from '../ui/label';
import { TextareaField } from '../molecules/textarea-field';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { periodPaid } from '@/utils/inputMasks';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { reviewService } from '@/services/review-service';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

const DisciplineEvaluationForm = () => {
    const { id } = useParams();
    const { session } = useAuth();
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ['review', id],
        queryFn: () => reviewService.getReviewById(id as string),
        enabled: !!id
    });

    const mutation = useMutation({
        mutationFn: (data: any) => reviewService.createReview(data),
        onSuccess: () => {
            toast({
                title: 'Avaliação enviada com sucesso!'
            });
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Erro ao enviar avaliação'
            });
        }
    });
    useEffect(() => {
        if (data) {
            setFormData({
                periodPaid: data.periodPaid,
                disciplineScore: data.disciplineScore,
                difficultyLevel: data.difficultyLevel,
                finalGrade: data.finalGrade,
                professorTeachingScore: data.professorTeachingScore,
                passedFirstTry: data.passedFirstTry,
                failedBefore: data.failedBefore,
                wentToRecovery: data.wentToRecovery,
                droppedOut: data.droppedOut,
                comment: data.comment,
                recommendation: data.recommendation || ''
            });
        }
    }, [data]);

    const [periodError, setPeriodError] = useState(false);

    const [formData, setFormData] = useState({
        periodPaid: '',
        disciplineScore: 0,
        difficultyLevel: 0,
        finalGrade: 0,
        professorTeachingScore: 0,
        passedFirstTry: false,
        wentToRecovery: false,
        failedBefore: false,
        droppedOut: false,
        comment: '',
        recommendation: ''
    });
    const handleChange = (name: string, value: string | boolean | number) => {
        if (
            [
                'disciplineScore',
                'difficultyLevel',
                'finalGrade',
                'professorTeachingScore'
            ].includes(name)
        ) {
            value = Number(value);
        }
        if (name === 'periodPaid' && typeof value === 'string') {
            value = periodPaid(value as string);
            const currentYear = parseInt(
                new Date().getFullYear().toString(),
                10
            );
            const semester = value.split('.');
            const year = parseInt(semester[0], 10);
            if (year > currentYear || !['1', '2'].includes(semester[1])) {
                setPeriodError(true);
            } else {
                setPeriodError(false);
            }
        }
        setFormData((prev) => ({
            ...prev,
            [name as keyof typeof formData]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (periodError) {
            alert('Período inválido!');
            return;
        }
        e.preventDefault();
        mutation.mutate({
            ...formData,
            disciplineId: id,
            userId: session?.user.id
        });
        setFormData({
            periodPaid: '',
            disciplineScore: 0,
            difficultyLevel: 0,
            finalGrade: 0,
            professorTeachingScore: 0,
            passedFirstTry: false,
            wentToRecovery: false,
            failedBefore: false,
            droppedOut: false,
            comment: '',
            recommendation: ''
        });
        router.push('/discipline/' + id);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto p-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                    id="periodPaid"
                    label="Período que pagou a Disciplina"
                    placeholder="Ex: 2023.1"
                    value={formData.periodPaid}
                    onChange={handleChange}
                    error={periodError}
                    required
                />
                <FormField
                    type="number"
                    id="disciplineScore"
                    label="Sua nota para a Disciplina"
                    placeholder="Nota"
                    value={formData.disciplineScore}
                    onChange={handleChange}
                    required
                />
                <FormField
                    type="number"
                    id="difficultyLevel"
                    label="Nível de Dificuldade"
                    placeholder="Dificuldade"
                    value={formData.difficultyLevel}
                    onChange={handleChange}
                    required
                />
                <FormField
                    type="number"
                    id="finalGrade"
                    label="Sua Média Final"
                    placeholder="Nota"
                    value={formData.finalGrade}
                    onChange={handleChange}
                    required
                />
                <FormField
                    type="number"
                    id="professorTeachingScore"
                    label="Avalie a Didática do Professor"
                    placeholder="Nota"
                    value={formData.professorTeachingScore}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { id: 'passedFirstTry', label: 'Passou de Primeira?' },
                    { id: 'wentToRecovery', label: 'Foi para Recuperação?' },
                    { id: 'failedBefore', label: 'Já Reprovou?' },
                    { id: 'droppedOut', label: 'Desistiu da Disciplina?' }
                ].map(({ id, label }) => (
                    <div
                        key={id}
                        className="h-full space-y-2 flex flex-col gap-5"
                    >
                        <Label htmlFor={id}>{label}</Label>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id={id}
                                checked={
                                    formData[
                                        id as keyof typeof formData
                                    ] as boolean
                                }
                                onClick={() =>
                                    handleChange(
                                        id,
                                        !formData[id as keyof typeof formData]
                                    )
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 space-y-4">
                <TextareaField
                    id="comment"
                    label="Escreva um comentário sobre a disciplina"
                    value={formData.comment}
                    onChange={handleChange}
                />
                <TextareaField
                    id="recommendation"
                    label="Escreva uma recomendação para quem for fazer a disciplina"
                    value={formData.recommendation}
                    onChange={handleChange}
                />
            </div>

            <div className="mt-6 flex justify-end">
                <Button
                    type="submit"
                    className="bg-blueDark hover:bg-blue-600"
                >
                    Enviar
                </Button>
            </div>
        </form>
    );
};

export default DisciplineEvaluationForm;
