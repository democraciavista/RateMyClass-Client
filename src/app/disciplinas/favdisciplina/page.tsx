import { HeaderSection } from '@/components/atom/header-section';
import { ListCard } from '@/components/organisms/list-card';
import { SearchSection } from '@/components/molecules/search-section';
import { SideBar } from '@/components/Template/layout-sidebar';
import { useQuery } from '@tanstack/react-query';
import { useFiltrer } from '@/app/context/filtres-context';
import { disciplineService } from '@/services';
import { useAuth } from '@/hooks/useAuth';

export default function FavDiscipline() {
    const { disciplineFavoriteFiltrers } = useFiltrer();
    const { session } = useAuth();

    const { data } = useQuery({
        queryKey: ['disciplineFav', disciplineFavoriteFiltrers],
        queryFn: () =>
            disciplineService.fetchAllDisciplineFavorites(
                disciplineFavoriteFiltrers,
                session?.user?.id || ''
            )
    });

    return (
        <SideBar>
            <HeaderSection text="Disciplinas Favoritas" />
            <SearchSection />
            <ListCard data={data} />
        </SideBar>
    );
}
