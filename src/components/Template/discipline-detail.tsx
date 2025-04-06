'use client';
import Link from 'next/link';
import { HeaderSection } from '../atom/header-section';
import { InfoField } from '../molecules/info-field';
import { DisciplineTabs } from '../organisms/discipline-tabs';
import { Button } from '../ui/button';
import { DialogMaterial } from '../molecules/materia-popup';
import { usePopUp } from '@/hooks/usePopup';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { disciplineService } from '@/services';
import { useDiscipline } from '@/hooks/useDiscipline';

export const DisciplineDetail = () => {
    const { mapType } = useDiscipline();

    const { open, setOpen } = usePopUp();
    const { id } = useParams();

    const { data } = useQuery({
        queryKey: ['disciplineAll', id],
        queryFn: () =>
            disciplineService.fetchDisciplineById(
                Array.isArray(id!) ? id![0] : id!
            )
    });

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <HeaderSection text="Disciplina" />
                <div className="flex gap-2">
                    <Button className="bg-blueDark relative hover:bg-blue-600">
                        <Link
                            href={'/disciplinas/' + id}
                            className=" absolute bg-transparent flex-grow w-full h-full"
                        ></Link>
                        Fazer Avaliação
                    </Button>
                    <Button
                        onClick={() => setOpen((prev) => !prev)}
                        className="bg-blueDark hover:bg-blue-600"
                    >
                        Enviar Material
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <InfoField
                    label="Professor(a)"
                    value={data?.professor || ''}
                />
                <InfoField
                    label="Curso"
                    value={data?.course || ''}
                />
                <InfoField
                    label="Código"
                    value={data?.code || ''}
                />
                <InfoField
                    label="Carga Horária"
                    value={data?.hours ? String(data.hours) + ' Horas' : ''}
                />
                <InfoField
                    label="Categoria"
                    value={data?.type ? mapType(data.type) : ''}
                />
                <InfoField
                    label="Centro"
                    value={data?.center || ''}
                />
            </div>
            <DisciplineTabs
                ratingDistribution={data?.ratingDistribution || []}
                reviews={data?.reviews || []}
                semesterData={data?.semesterData || []}
            />
            <DialogMaterial
                disciplineId={id as string || ''}
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
};
