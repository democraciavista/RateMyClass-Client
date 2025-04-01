import { BookOpen, Star } from 'lucide-react';
import { StatisticCard } from '../molecules/statistic-card';
import { RatingDistribution } from '../molecules/rating-distribution';
import { SemesterChart } from '../molecules/semester-chart';

const semesterData = [
    { semester: '2022.1', rating: 3.1 },
    { semester: '2022.2', rating: 3.0 },
    { semester: '2023.1', rating: 3.2 },
    { semester: '2023.2', rating: 3.1 },
    { semester: '2024.1', rating: 3.3 }
];

const ratingDistribution = [
    { stars: 5, percentage: 60, color: '#3b82f6' },
    { stars: 4, percentage: 20, color: '#3b82f6' },
    { stars: 3, percentage: 10, color: '#3b82f6' },
    { stars: 2, percentage: 7, color: '#3b82f6' },
    { stars: 1, percentage: 3, color: '#3b82f6' }
];

export const Statistics = () => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatisticCard
                icon={<BookOpen className="h-6 w-6 text-gray-500" />}
                value="20%"
                label="% de Estudantes que foram para a final"
            />
            <StatisticCard
                icon={<Star className="h-6 w-6 text-gray-500" />}
                value="20%"
                label="Nota Média dos Estudantes na disciplina"
            />
        </div>
        <RatingDistribution ratings={ratingDistribution} />
    </div>
);
