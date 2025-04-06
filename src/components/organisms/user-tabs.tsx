import { ReviewCard } from '../molecules/review-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListMaterial } from './list-materials';
import { MaterialType } from '@/@types';

type UserTabsProps = {
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
export const UserTabs = ({ reviews }: UserTabsProps) => (
    <Tabs
        defaultValue="avaliacoes"
        className="w-full"
    >
        <TabsList className="w-full grid grid-cols-2 mb-6">
            <TabsTrigger
                value="avaliacoes"
                className="text-center "
            >
                Minhas Avaliações
            </TabsTrigger>
            <TabsTrigger
                value="material"
                className="text-center  "
            >
                Meus Material
            </TabsTrigger>
        </TabsList>
        <TabsContent value="avaliacoes">
            {reviews.map((review, index) => (
                <ReviewCard
                    key={index}
                    {...review}
                    isUser
                />
            ))}
        </TabsContent>
        <TabsContent value="material">
            <ListMaterial
                materials={array}
                isUser
                withoutInformation={false}
            />
        </TabsContent>
    </Tabs>
);
