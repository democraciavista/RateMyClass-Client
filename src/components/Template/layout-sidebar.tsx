'use client';
import { useSideBar } from '@/hooks/useSidebar';
import { sideBarComposition } from '../organisms/navbar-composition';

function SideBar({ children }: { children: React.ReactNode }) {
    const { listItemsMenu } = useSideBar();
    return (
        <div className="flex flex-row bg-white w-full min-h-screen">
            <sideBarComposition.Container>
                <sideBarComposition.Logo />
                <sideBarComposition.ListItens itens={listItemsMenu} />
                <sideBarComposition.Botton />
            </sideBarComposition.Container>
            <div className="p-6 w-full max-w-[1300px] mx-auto">{children}</div>
        </div>
    );
}
export { SideBar };
