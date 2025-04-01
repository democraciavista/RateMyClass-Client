import { Input } from "../ui/input";

function FildsSectionDiscipline() {
  return (
      <div className="w-full grid grid-cols-1 gap-4 p-4 ">
          <div className="grid grid-cols-3 gap-4 ">
              <div className="space-y-2">
                  <label className="text-sm font-medium">Professor(a)</label>
                  <Input
                      value="Ismael Henrique Cavalcante almeida"
                      readOnly
                  />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-medium">Período</label>
                  <Input
                      value="1 Período"
                      readOnly
                  />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-medium">Código</label>
                  <Input
                      value="dffdsfsdf"
                      readOnly
                  />
              </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                  <label className="text-sm font-medium">Curso</label>
                  <Input
                      value="Engenharia da Computação"
                      readOnly
                  />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo</label>
                  <Input
                      value="Eletiva Livre"
                      readOnly
                  />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-medium">Centro</label>
                  <Input
                      value="CTG"
                      readOnly
                  />
              </div>
          </div>
      </div>
  );
}
export { FildsSectionDiscipline };