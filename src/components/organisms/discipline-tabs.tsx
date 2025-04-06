import { ReviewCard } from '../molecules/review-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListMaterial } from './list-materials';
import { Statistics } from './statistics';
import { SemesterChart } from '../molecules/semester-chart';
import { RatingDistribution } from '../molecules/rating-distribution';
import { MaterialType } from '@/@types';


type DisciplineTabsProps = {
    reviews: Array<{
        update: string;
        periodPaid: number;
        rating: number;
        comment: string;
        recommendation: string;
        likes: number;
        likeId?: string;
        reportId?: string;

    }>;
    semesterData: Array<{
        semester: string;
        rating: number;
    }>;
    ratingDistribution: Array<{
        stars: string;
        percentage: number;
        color: string;
    }>;
};

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
export const DisciplineTabs = ({
    ratingDistribution,
    reviews,
    semesterData
}: DisciplineTabsProps) => (
    <Tabs
        defaultValue="avaliacoes"
        className="w-full"
    >
        <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger
                value="avaliacoes"
                className="text-center "
            >
                Avaliações
            </TabsTrigger>
            <TabsTrigger
                value="material"
                className="text-center "
            >
                Material
            </TabsTrigger>
            <TabsTrigger
                value="estatistica"
                className="text-center "
            >
                Estatística
            </TabsTrigger>
        </TabsList>
        <TabsContent value="avaliacoes">
            {reviews.map((review, index) => (
                <ReviewCard
                    key={index}
                    {...review}
                />
            ))}
        </TabsContent>
        <TabsContent value="material">
            <ListMaterial
                materials={array}
                withoutInformation
            />
        </TabsContent>
        <TabsContent value="estatistica">
            <div className="space-y-6">
                <Statistics />

                <RatingDistribution ratings={ratingDistribution} />

                <SemesterChart data={semesterData} />
            </div>
        </TabsContent>
    </Tabs>
);
