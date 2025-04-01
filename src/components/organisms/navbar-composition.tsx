import { BottomSection } from '../molecules/bottom-section-menu';
import ContainerMenu from '../molecules/container-menu';
import { ListItensMenu } from '../molecules/list-itens-menu';
import { LogoSection } from '../molecules/logo-section-menu';

const sideBarComposition = {
    Container: ContainerMenu,
    ListItens: ListItensMenu,
    Botton: BottomSection,
    Logo: LogoSection
};
export { sideBarComposition };
