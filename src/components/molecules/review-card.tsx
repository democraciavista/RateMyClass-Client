'use client';
import { cn } from '@/lib/utils';
import { mapPeriodPaid } from '@/utils/map';
import { Star, ThumbsUp, Ban, Edit, Trash } from 'lucide-react';
import { useState } from 'react';

type ReviewCardProps = {
    update: string;
    periodPaid: number;
    rating: number;
    comment: string;
    recommendation: string;
    likes: number;
    likeId?: string;
    reportId?: string;
    isUser?: boolean;
};

export const ReviewCard = ({
    update,
    periodPaid,
    likeId,
    reportId,
    rating,
    comment,
    recommendation,
    likes,
    isUser = false
}: ReviewCardProps) => {
    const [openCard, setOpenCard] = useState(false);

    return (
        <div className="bg-white rounded-lg border p-4 mb-4">
            <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">
                    {mapPeriodPaid(periodPaid)}
                </span>
                <div className="flex gap-2">
                    {' '}
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
                        <span className="font-bold mr-1">{rating}</span>
                        <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <h3 className="font-medium mb-1">Avaliação</h3>
                <p className="text-sm text-gray-700">
                    {openCard
                        ? comment
                        : comment.slice(0, 300) +
                          (comment.length > 300 ? '...' : '')}
                </p>
            </div>
            {openCard && (
                <>
                    <div className="mb-3">
                        <h3 className="font-medium mb-1">Recomendação</h3>
                        <p className="text-sm text-gray-700">
                            {recommendation}
                        </p>
                    </div>
                    <button
                        className="text-blueDark text-sm"
                        onClick={() => setOpenCard(false)}
                    >
                        Ver menos
                    </button>
                </>
            )}
            {!openCard && (
                <button
                    className="text-blueDark text-sm"
                    onClick={() => setOpenCard(true)}
                >
                    Ver mais
                </button>
            )}

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1">
                        <ThumbsUp
                            className={cn(
                                'h-5 w-5 ml-1 cursor-pointer',
                                likeId ? 'text-blueDark ' : 'text-gray-400'
                            )}
                        />
                        <span>{likes}</span>
                    </button>
                    <button>
                        <Ban
                            className={cn(
                                'h-5 w-5 ml-1 cursor-pointer',
                                reportId ? 'text-red-500 ' : 'text-gray-400'
                            )}
                        />{' '}
                    </button>
                </div>
                <div className="text-sm text-gray-500">{update}</div>
            </div>
        </div>
    );
};
