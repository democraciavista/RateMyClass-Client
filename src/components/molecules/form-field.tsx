import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormFieldProps = {
    id: string;
    label: string;
    placeholder?: string;
    name?: string;
    type?: string;
    value?: string | number;
    onChange?: (name: string, value: string | number | boolean) => void;
};

export const FormField = ({
    id,
    label,
    placeholder,
    type = 'text',
    value,
    onChange
}: FormFieldProps) => (
    <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <Input
            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
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
