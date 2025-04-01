import { ReactNode } from 'react';
import { CardFooter } from '../ui/card';

function CardFooterSection({ children }: { children: ReactNode }) {
    return (
        <CardFooter className="px-4 pb-4 pt-2 flex justify-between">
            {children}
        </CardFooter>
    );
}
export { CardFooterSection };
