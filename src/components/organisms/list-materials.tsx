'use client';
import { Ban, Edit, Heart, ThumbsUp, Trash } from 'lucide-react';
import { CardContainerSection } from '../atom/container-card';
import { CardContentSection } from '../atom/content-card';
import { CardFooterSection } from '../atom/footer-card';
import { ItemBadge } from '../atom/item-badge';
import { Button } from '../ui/button';
import { MaterialType } from '@/@types';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function ListMaterial({
    materials,
    refetch,
    withoutInformation = false,
    isUser = false
}: {
    materials?: MaterialType[];
    refetch?: () => void;
    withoutInformation?: boolean;
    isUser?: boolean;
}) {
    if (materials?.length === 0) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">Nenhum Material encontrado</p>
            </div>
        );
    }
    return materials?.map((item) => {
        return (
            <CardContainerSection key={item.id}>
                <CardContentSection>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-lg">{item.title}</h2>
                            {!withoutInformation && (
                                <ItemBadge> {item.discipline.name}</ItemBadge>
                            )}
                        </div>
                        {!withoutInformation && (
                            <>
                                <p className="text-sm text-gray-600 mt-1">
                                    Prof: {item.discipline.professor}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    {item.discipline.course}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {item.discipline.code}
                                </p>
                            </>
                        )}
                    </div>
                    <div className="flex gap-2">
                        {isUser && (
                            <>
                                <button>
                                    <Edit className="h-5 w-5 ml-1" />
                                </button>
                                <button className="">
                                    <Trash className="h-5 w-5 ml-1 text-red-500 hover:text-red-600" />{' '}
                                </button>
                            </>
                        )}
                        <div className="flex items-center">
                            <Heart
                                className={`h-5 w-5 cursor-pointer ${item.reviewsLike ? 'text-red-500 fill-red-500 hover:fill-red-400' : 'text-gray-400 hover:fill-gray-300'} `}
                            />
                        </div>
                    </div>
                </CardContentSection>
                <CardFooterSection>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center mr-2 gap-2">
                            <ThumbsUp
                                className={cn(
                                    'h-5 w-5 ml-1 cursor-pointer',
                                    item.reviewsLike
                                        ? 'text-blueDark '
                                        : 'text-gray-400'
                                )}
                            />
                            <span>{item.reviewsLikeCount || '0'}</span>
                        </div>
                        <Ban
                            className={cn(
                                'h-5 w-5 ml-1 cursor-pointer',
                                item.reviewsReport
                                    ? 'text-red-500 fill-red-500'
                                    : 'text-gray-400'
                            )}
                        />
                    </div>
                    <Button className="bg-blueDark hover:bg-blue-600 text-sm">
                        <Link
                            target="_blank"
                            href={item.link}
                            className="w-full"
                        >
                            Acessar
                        </Link>
                    </Button>
                </CardFooterSection>
            </CardContainerSection>
        );
    });
}

export { ListMaterial };
