'use client';

import { Dialog, DialogContent, DialogTitle, DialogHeader } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { materialService } from '@/services';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

function DialogMaterial({
    open,
    setOpen,
    materialId,
    disciplineId
}: {
    open: boolean;
    materialId?: string;
    disciplineId: string;
    setOpen: (value: boolean) => void;
}) {
    const [popupData, setPopupData] = useState({
        titulo: '',
        link: ''
    });
    const { session } = useAuth();
    const materialMutation = useMutation({
        mutationFn: () => {
            return materialId
                ? materialService.updateMaterial(materialId, {
                      link: popupData.link,
                      title: popupData.titulo
                  })
                : materialService.createMaterial({
                      link: popupData.link,
                      title: popupData.titulo,
                      disciplineId: disciplineId,
                      userId: session?.user?.id || ''
                  });
        },
        mutationKey: ['material'],

        onSuccess: () => {
            toast({
                title: 'Material adicionado com sucesso!'
            });
            setOpen(false);
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Erro ao adicionar material'
            });
        }
    });
    function handleCreateMaterial() {
        if (popupData.titulo && popupData.link) {
            materialMutation.mutate();
        } else {
            toast({
                variant: 'destructive',
                title: 'Preencha todos os campos'
            });
        }
    }
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Material</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <Label>Título</Label>
                        <Input
                            type="text"
                            placeholder="Digite um  título do material"
                            value={popupData.titulo}
                            onChange={(e) =>
                                setPopupData({
                                    ...popupData,
                                    titulo: e.target.value
                                })
                            }
                        />
                    </div>
                    <div>
                        <Label>Link</Label>
                        <Input
                            type="text"
                            placeholder="Digite o link para acessar o material"
                            value={popupData.link}
                            onChange={(e) =>
                                setPopupData({
                                    ...popupData,
                                    link: e.target.value
                                })
                            }
                        />
                    </div>
                    <Button
                        onClick={handleCreateMaterial}
                        className="w-full bg-blueDark"
                    >
                        Criar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
export { DialogMaterial };
