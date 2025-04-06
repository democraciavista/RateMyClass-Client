import { useFiltrer } from '@/app/context/filtres-context';
import { HeaderSection } from '@/components/atom/header-section';
import { SearchMaterial } from '@/components/molecules/search-material';
import { ListMaterial } from '@/components/organisms/list-materials';
import { SideBar } from '@/components/Template/layout-sidebar';
import { useAuth } from '@/hooks/useAuth';
import { materialService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export default function FavMaterial() {
    const { materialFavoriteFiltrers } = useFiltrer();
    const { session } = useAuth();

    const { data } = useQuery({
        queryKey: ['materialFav', materialFavoriteFiltrers],
        queryFn: () =>
            materialService.fetchAllMaterialFavorites(materialFavoriteFiltrers, 
                session?.user?.id || ''
            )
    });
    return (
        <SideBar>
            <HeaderSection text="Materiais Favoritos" />
            <SearchMaterial isFavorite />
            <ListMaterial materials={data} />
        </SideBar>
    );
}
