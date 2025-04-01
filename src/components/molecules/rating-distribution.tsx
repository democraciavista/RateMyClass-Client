import { Star } from 'lucide-react';

type RatingDistributionProps = {
    ratings: Array<{ stars: number; percentage: number; color: string }>;
};

export const RatingDistribution = ({ ratings }: RatingDistributionProps) => (
    <div>
        <h3 className="text-sm font-medium mb-4">
            Distribuição das avaliações
        </h3>
        <div className="space-y-2">
            {ratings.map((item) => (
                <div
                    key={item.stars}
                    className="flex items-center"
                >
                    <div className="flex items-center w-8">
                        <span className="text-sm font-medium">
                            {item.stars}
                        </span>
                        <Star className="h-4 w-4 text-yellow-400 ml-1" />
                    </div>
                    <div className="flex-1 ml-2">
                        <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${item.percentage}%`,
                                    backgroundColor: item.color
                                }}
                            ></div>
                        </div>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                        {item.percentage}%
                    </span>
                </div>
            ))}
        </div>
    </div>
);
