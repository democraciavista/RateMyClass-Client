import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IconWrapper } from '../atom/icon-wrapper';

type StatisticCardProps = {
    icon: ReactNode;
    value: string;
    label: string;
};

export const StatisticCard = ({ icon, value, label }: StatisticCardProps) => (
    <Card>
        <CardContent className="p-6 flex items-center">
            <IconWrapper>{icon}</IconWrapper>
            <div>
                <h3 className="font-bold text-2xl">{value}</h3>
                <p className="text-sm text-gray-500">{label}</p>
            </div>
        </CardContent>
    </Card>
);
