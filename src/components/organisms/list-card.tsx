import { Heart, Star } from 'lucide-react';
import { CardContainerSection } from '../atom/container-card';
import { CardContentSection } from '../atom/content-card';
import { CardFooterSection } from '../atom/footer-card';
import { ItemBadge } from '../atom/item-badge';
import { Button } from '../ui/button';
import { DisciplineType } from '@/@types';
import { useDiscipline } from '@/hooks/useDiscipline';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function ListCard() {
    const { mapType, getColorClass } = useDiscipline();
    const array: DisciplineType[] = [
        {
            id: '1',
            center: 'IF',
            code: 'IF979',
            name: 'Cálculo 2',
            professor: 'Juliana Saraíva',
            period: 2,
            hours: 60,
            course: 'Ciência da Computação',
            type: 'MANDATORY'
        },
        {
            id: '2',
            center: 'IF',
            code: 'IF979',
            name: 'Cálculo 2',
            professor: 'Juliana Saraíva',
            period: 2,
            hours: 60,
            course: 'Ciência da Computação',
            type: 'MANDATORY'
        },
        {
            id: '3',
            center: 'IF',
            code: 'IF979',
            name: 'Cálculo 2',
            professor: 'Juliana Saraíva',
            period: 2,
            hours: 60,
            course: 'Ciência da Computação',
            type: 'MANDATORY'
        }
    ];
    return array.map((item) => {
        return (
            <CardContainerSection key={item.id}>
                <CardContentSection>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-lg">{item.name}</h2>
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
                    <Button className="bg-blue-500 hover:bg-blue-600 text-sm">
                        <Link
                            href={'/discipline/' + item.id}
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
