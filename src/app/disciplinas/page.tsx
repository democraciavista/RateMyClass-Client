import { HeaderSection } from '@/components/atom/header-section';
import { SearchSection } from '@/components/molecules/search-section';
import { ListMaterial } from '@/components/organisms/list-materials';
import { SideBar } from '@/components/Template/layout-sidebar';

export default function WelcomeScreen() {
    return (
        <SideBar>
            <HeaderSection text="Buscar Materiais" />
            <SearchSection />
            <ListMaterial />
        </SideBar>
    );
}
