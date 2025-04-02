import { HeaderSection } from "../atom/header-section";
import { InfoField } from "../molecules/info-field";
import { SemesterChart } from "../molecules/semester-chart";
import { DisciplineTabs } from "../organisms/discipline-tabs";
import { Button } from "../ui/button";

export const DisciplineDetail = () => {
    const reviews = [
        {
            date: '02/12/2022',
            rating: 5.0,
            review: 'Ótima disciplina!',
            recommendation: 'Recomendo muito!',
            likes: 22
        }
    ];
      const semesterData = [
          { semester: '2022.1', rating: 3.1 },
          { semester: '2022.2', rating: 3.0 },
          { semester: '2023.1', rating: 3.2 },
          { semester: '2023.2', rating: 3.1 },
          { semester: '2024.1', rating: 3.3 }
      ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <HeaderSection text="Disciplina" />
                <div className="flex gap-2">
                    <Button>Fazer Avaliação</Button>
                    <Button>Enviar Material</Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <InfoField
                    label="Professor(a)"
                    value="Ismael Henrique Cavalcante Almeida"
                />
                <InfoField
                    label="Período"
                    value="1º Período"
                />
                <InfoField
                    label="Código"
                    value="dffdsfsdf"
                />
                <InfoField
                    label="Código"
                    value="dffdsfsdf"
                />
                <InfoField
                    label="Código"
                    value="dffdsfsdf"
                />
                <InfoField
                    label="Código"
                    value="dffdsfsdf"
                />
            </div>
            <DisciplineTabs reviews={reviews} semesterData={semesterData} />
        </div>
    );
};
