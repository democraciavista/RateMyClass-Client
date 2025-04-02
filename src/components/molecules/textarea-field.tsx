import React from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextareaFieldProps = {
    id: string;
    label: string;
    value: string;
    onChange?: (name: string, value: string | number | boolean) => void;
};

export const TextareaField = ({ id, label, value, onChange }: TextareaFieldProps) => (
    <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <Textarea
            id={id}
            name={id}
            value={value}
            onChange={(e) => {
                if (onChange) {
                    const { name, value } = e.target;
                    onChange(name, value);
                }
            }}
        />
    </div>
);
