import { cn } from '@/lib/utils';
import { Star, ThumbsUp, ThumbsDown, Ban } from 'lucide-react';

type ReviewCardProps = {
    date: string;
    rating: number;
    review: string;
    recommendation: string;
    likes: number;
};

export const ReviewCard = ({
    date,
    rating,
    review,
    recommendation,
    likes
}: ReviewCardProps) => (
    <div className="bg-white rounded-lg border p-4 mb-4">
        <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">{date}</span>
            <div className="flex items-center">
                <span className="font-bold mr-1">{rating}</span>
                <Star className="h-5 w-5 text-yellow-400" />
            </div>
        </div>
        <div className="mb-2">
            <h3 className="font-medium mb-1">Avaliação</h3>
            <p className="text-sm text-gray-700">{review}</p>
        </div>
        <div className="mb-3">
            <h3 className="font-medium mb-1">Recomendação</h3>
            <p className="text-sm text-gray-700">{recommendation}</p>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <button className="flex items-center gap-1">
                    <ThumbsUp className="h-5 w-5" />
                    <span>{likes}</span>
                </button>
                <button>
                    <Ban
                        className={cn(
                            'h-5 w-5 ml-1 cursor-pointer',
                            true
                                ? 'text-red-500  hover:text-red-400'
                                : 'text-gray-400 hover:text-gray-300'
                        )}
                    />{' '}
                </button>
            </div>
            <div className="text-sm text-gray-500">{date}</div>
        </div>
    </div>
);
