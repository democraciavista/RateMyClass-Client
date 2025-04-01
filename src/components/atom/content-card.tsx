import { ReactNode } from 'react';
import { CardContent, CardFooter } from '../ui/card';

function CardContentSection({ children }: { children: ReactNode }) {
    return (
        <CardContent className="px-4 pt-4 pb-0">
            <div className="flex justify-between items-start">{children}</div>
        </CardContent>
    );
}

export { CardContentSection };
