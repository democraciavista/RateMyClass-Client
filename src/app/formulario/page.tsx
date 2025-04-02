import { HeaderSection } from '@/components/atom/header-section';
import DisciplineEvaluationForm from '@/components/organisms/discipline-evaluation-form';
import { SideBar } from '@/components/Template/layout-sidebar';

export default function Forms() {
    return (
        <SideBar>
            <HeaderSection text="Buscar Materiais" />
            <DisciplineEvaluationForm />
        </SideBar>
    );
}
