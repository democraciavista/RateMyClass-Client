import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '../atom/icon-wrapper';

type StatisticCardProps = {
    icon: ReactNode;
    value: ReactNode;
    label: string;
    title: string;
};

export const StatisticCard = ({
    icon,
    value,
    label,
    title
}: StatisticCardProps) => (
    <Card>
        <CardContent className="p-6 flex items-center">
            <IconWrapper>{icon}</IconWrapper>
            <div>
                <h2 className="font-normal text-xl">{title}</h2>

                <h3 className="font-bold text-2xl">{value}</h3>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </CardContent>
    </Card>
);
