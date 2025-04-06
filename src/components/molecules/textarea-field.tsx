import React from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextareaFieldProps = {
    id: string;
    label: string;
    value: string;
    required?: boolean;
    error?: boolean;
    onChange?: (name: string, value: string | number | boolean) => void;
};

export const TextareaField = ({
    required,
    id,
    error,
    label,
    value,
    onChange
}: TextareaFieldProps) => {
    const baseClasses =
        'rounded px-3 py-2 w-full outline-none focus:outline-none';
    const errorClasses = error
        ? 'border-red-500 ring-red-500 focus:border-2'
        : 'border-gray-300';

    return (
        <div className="space-y-2">
            <Label htmlFor={id}>
                {label}
                {required && <span>*</span>}
            </Label>
            <Textarea
                id={id}
                name={id}
                value={value}
                className={`${baseClasses} ${errorClasses}`}
                onChange={(e) => {
                    if (onChange) {
                        const { name, value } = e.target;
                        onChange(name, value);
                    }
                }}
            />
        </div>
    );
};
