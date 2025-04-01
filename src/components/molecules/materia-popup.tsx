'use client';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';

function DialogMaterial({
    open,
    setOpen
}: {
    open: boolean;
    setOpen: (value: boolean) => void;
}) {
    const [popupData, setPopupData] = useState({
        titulo: '',
        link: ''
    });
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
                            placeholder="Digite o título"
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
                            placeholder="Digite o link"
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
                        onClick={() => setOpen(false)}
                        className="w-full"
                    >
                        Fechar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
export { DialogMaterial };
