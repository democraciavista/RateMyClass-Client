import { ReviewCard } from '../molecules/review-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListMaterial } from './list-materials';
import { Statistics } from './statistics';
import { SemesterChart } from '../molecules/semester-chart';

type DisciplineTabsProps = {
    reviews: Array<{
        date: string;
        rating: number;
        review: string;
        recommendation: string;
        likes: number;
    }>;
    semesterData: Array<{
        semester: string;
        rating: number;
    }>;
};

export const DisciplineTabs = ({
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
            <ListMaterial />
        </TabsContent>
        <TabsContent value="estatistica">
            <div className="mb-4">
                <Statistics />
            </div>
            <SemesterChart data={semesterData} />
        </TabsContent>
    </Tabs>
);
