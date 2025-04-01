'use client';
import { Ban, Heart, ThumbsUp } from 'lucide-react';
import { CardContainerSection } from '../atom/container-card';
import { CardContentSection } from '../atom/content-card';
import { CardFooterSection } from '../atom/footer-card';
import { ItemBadge } from '../atom/item-badge';
import { Button } from '../ui/button';
import { MaterialType } from '@/@types';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DialogMaterial } from '../molecules/materia-popup';

function ListMaterial() {
    const array: MaterialType[] = [
        {
            id: '1',
            disciplineId: '1',
            link: 'https://www.google.com',
            title: 'Resumo de Cálculo 2',
            userId: '1',
            reviewsLikeCount: 0,
            discipline: {
                id: '1',
                code: 'IF979',
                name: 'Cálculo 2',
                professor: 'Juliana Saraíva',
                center: 'IF',
                period: 2,
                hours: 60,
                course: 'Ciência da Computação',
                type: 'MANDATORY'
            }
        },
        {
            id: '2',
            disciplineId: '1',
            link: 'https://www.google.com',
            title: 'Fórmulas de Cálculo 2',
            userId: '1',
            reviewsLikeCount: 0,
            discipline: {
                id: '1',
                code: 'IF979',
                name: 'Cálculo 2',
                professor: 'Juliana Saraíva',
                center: 'IF',
                period: 2,
                hours: 60,
                course: 'Ciência da Computação',
                type: 'MANDATORY'
            }
        },
        {
            id: '3',
            disciplineId: '1',
            link: 'https://www.google.com',
            title: 'Exercícios de Cálculo 2',
            userId: '1',
            reviewsLikeCount: 0,
            discipline: {
                id: '1',
                code: 'IF979',
                name: 'Cálculo 2',
                professor: 'Juliana Saraíva',
                center: 'IF',
                period: 2,
                hours: 60,
                course: 'Ciência da Computação',
                type: 'MANDATORY'
            }
        }
    ];
    return array.map((item) => {
        return (
            <CardContainerSection key={item.id}>
                <CardContentSection>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            <ItemBadge> {item.discipline.course}</ItemBadge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Prof: {item.discipline.professor}
                        </p>
                        <p className="text-sm text-gray-600">
                            {item.discipline.course}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Heart
                            className={`h-5 w-5 cursor-pointer ${item.reviewsLike ? 'text-red-500 fill-red-500 hover:fill-red-400' : 'text-gray-400 hover:fill-gray-300'} `}
                        />
                    </div>
                </CardContentSection>
                <CardFooterSection>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center mr-2 gap-2">
                            <ThumbsUp className="h-5 w-5 text-blueDark cursor-pointer" />
                            <span className="font-bold text-end text-lg ">
                                {item.reviewsLikeCount || '0'}
                            </span>
                        </div>
                        <Ban
                            className={cn(
                                'h-5 w-5 ml-1 cursor-pointer',
                                item.reviewsReport
                                    ? 'text-red-500 fill-red-500 hover:fill-red-400'
                                    : 'text-gray-400 hover:fill-gray-300'
                            )}
                        />
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-sm">
                        <Link
                            target="_blank"
                            href={item.link}
                            className="w-full"
                        >
                            Acessar
                        </Link>
                    </Button>
                </CardFooterSection>
                <DialogMaterial
                    open={false}
                    setOpen={() => {}}
                />
            </CardContainerSection>
        );
    });
}

export { ListMaterial };
