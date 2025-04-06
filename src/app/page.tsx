import { HeaderSection } from '@/components/atom/header-section';
import { ListCard } from '@/components/organisms/list-card';
import { SearchSection } from '@/components/molecules/search-section';
import { SideBar } from '@/components/Template/layout-sidebar';
import { useQuery } from '@tanstack/react-query';
import { useFiltrer } from './context/filtres-context';
import { disciplineService } from '@/services';

export default function HomePage() {
    const { disciplineFiltrers } = useFiltrer();

    const { data } = useQuery({
        queryKey: ['discipline', disciplineFiltrers],
        queryFn: () => disciplineService.fetchAllDisciplines(disciplineFiltrers)
    });
    return (
        <SideBar>
            <HeaderSection text="Buscar Disciplina" />
            <SearchSection />
            <ListCard data={data} />
        </SideBar>
    );
}
