'use client';
import { Heart, Star } from 'lucide-react';
import { CardContainerSection } from '../atom/container-card';
import { CardContentSection } from '../atom/content-card';
import { CardFooterSection } from '../atom/footer-card';
import { ItemBadge } from '../atom/item-badge';
import { Button } from '../ui/button';
import { useDiscipline } from '@/hooks/useDiscipline';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { DisciplineType } from '@/@types';

function ListCard({ data }: { data?: DisciplineType[] }) {
    const { mapType, getColorClass } = useDiscipline();

    if (data?.length === 0) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">Nenhuma disciplina encontrada</p>
            </div>
        );
    }

    return data?.map((item) => {
        return (
            <CardContainerSection key={item.id}>
                <CardContentSection>
                    <div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="link"
                                className="p-0"
                            >
                                <Link
                                    href={'/disciplinas/' + item.id}
                                    className="font-bold text-lg"
                                >
                                    {item.name}
                                </Link>
                            </Button>{' '}
                            <ItemBadge> {item.code}</ItemBadge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Prof: {item.professor}
                        </p>
                        <p className="text-sm text-gray-600">{item.course}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center mr-2">
                            <span className="font-bold text-lg">
                                {item.statistics?.disciplineScore || '0,0'}{' '}
                            </span>
                            <Star
                                className={cn(
                                    'h-5 w-5 ml-1',
                                    getColorClass(
                                        item.statistics?.disciplineScore
                                    )
                                )}
                            />
                        </div>

                        <Heart
                            className={`h-5 w-5 cursor-pointer ${item.reviews ? 'text-red-500 fill-red-500 hover:fill-red-400' : 'text-gray-400 hover:fill-gray-300'} `}
                        />
                    </div>
                </CardContentSection>
                <CardFooterSection>
                    <div className="flex items-center gap-4">
                        {item.period && (
                            <ItemBadge>{item.period}º período</ItemBadge>
                        )}
                        <ItemBadge>{mapType(item.type)}</ItemBadge>
                        <ItemBadge>{item.hours} horas</ItemBadge>
                        <ItemBadge>{item.center}</ItemBadge>
                    </div>
                    <Button className="bg-blueDark hover:bg-blue-600 text-sm">
                        <Link
                            href={'/disciplinas/' + item.id + '/formulario'}
                            className="w-full"
                        >
                            Avaliar
                        </Link>{' '}
                    </Button>
                </CardFooterSection>
            </CardContainerSection>
        );
    });
}

export { ListCard };
