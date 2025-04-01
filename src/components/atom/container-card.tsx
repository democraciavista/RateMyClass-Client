import { ReactNode } from 'react';
import { Card } from '../ui/card';

function CardContainerSection({ children }: { children: ReactNode }) {
    return (
        <Card className="border rounded-lg shadow-sm mb-4 hover:bg-slate-100">
            {children}
        </Card>
    );
}

export { CardContainerSection };
