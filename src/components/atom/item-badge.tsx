import { ReactNode } from 'react';
import { Badge } from '../ui/badge';

function ItemBadge({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center text-sm">
            <Badge
                variant="outline"
                className="bg-blueLight"
            >
                {children}
            </Badge>
        </div>
    );
}

export { ItemBadge };