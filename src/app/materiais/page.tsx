import { HeaderSection } from '@/components/atom/header-section';
import { SearchMaterial } from '@/components/molecules/search-material';
import { ListMaterial } from '@/components/organisms/list-materials';
import { SideBar } from '@/components/Template/layout-sidebar';
import { useFiltrer } from '../context/filtres-context';
import { useQuery } from '@tanstack/react-query';
import { materialService } from '@/services';

export default function MaterialPage() {
    const { materialFiltrers } = useFiltrer();
    const { data } = useQuery({
        queryKey: ['material', materialFiltrers],
        queryFn: () => materialService.fetchAllMaterials(materialFiltrers)
    });
    return (
        <SideBar>
            <HeaderSection text="Buscar Materiais" />
            <SearchMaterial />
            <ListMaterial materials={data} />
        </SideBar>
    );
}
