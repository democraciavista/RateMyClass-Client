import { BookOpen, CircleMinus, GraduationCap, Presentation, RouteOff, Star, TrendingDown, Users } from 'lucide-react';
import { StatisticCard } from '../molecules/statistic-card';

export const Statistics = () => (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatisticCard
                title="Nota da Disciplina"
                icon={<Star className="h-6 w-6 text-gray-500" />}
                value={
                    <p>
                        3.5<span className="text-gray-800 text-base">/10</span>
                    </p>
                }
                label="Avaliação dos Estudantes sobre disciplina"
            />
            <StatisticCard
                title="Dificuldade"
                icon={<BookOpen className="h-6 w-6 text-gray-500" />}
                value={
                    <p>
                        3.5<span className="text-gray-800 text-base">/10</span>
                    </p>
                }
                label="Complexidade da disciplina"
            />{' '}
            <StatisticCard
                title="Didática do Professor"
                icon={<Presentation className="h-6 w-6 text-gray-500" />}
                value={
                    <p>
                        3.5<span className="text-gray-800 text-base">/10</span>
                    </p>
                }
                label="Avalicação sobre ensino do professor"
            />
            <StatisticCard
                title="Taxa de Desistência"
                icon={<RouteOff className="h-6 w-6 text-gray-500" />}
                value="20%"
                label="% de alunos que abandonam a disciplina"
            />
            <StatisticCard
                title="Passou de Primeira"
                icon={<Users className="h-6 w-6 text-gray-500" />}
                value="20%"
                label="% de alunos que passaram na primeira tentativa"
            />
            <StatisticCard
                title="Foram pra final"
                icon={<TrendingDown className="h-6 w-6 text-gray-500" />}
                value="20%"
                label="% de Estudantes que foram para a final"
            />
            <StatisticCard
                title="Reprovaram"
                icon={<CircleMinus className="h-6 w-6 text-gray-500" />}
                value="20%"
                label="% de Estudantes que reprovaram"
            />
            <StatisticCard
                title="Nota Final dos Estudantes"
                icon={<GraduationCap className="h-6 w-6 text-gray-500" />}
                value={
                    <p>
                        3.5<span className="text-gray-800 text-base">/10</span>
                    </p>
                }
                label="Nota Média dos Estudantes na disciplina"
            />
        </div>
    </div>
);
