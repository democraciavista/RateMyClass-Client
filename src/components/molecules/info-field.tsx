import { Input } from '../ui/input';
import { Label } from '../ui/label';

type InfoFieldProps = {
    label: string;
    value: string;
};

export const InfoField = ({ label, value }: InfoFieldProps) => (
    <div className="space-y-2">
        <Label className="text-sm font-medium">{label}</Label>
        <Input value={value} readOnly />
    </div>
);
