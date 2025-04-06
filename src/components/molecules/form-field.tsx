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
    error?: boolean;
    required?: boolean;
    onChange?: (name: string, value: string | number | boolean) => void;
};

export const FormField = ({
    id,
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    error,
    required = false
}: FormFieldProps) => {
    const baseClasses =
        'rounded px-3 py-2 w-full outline-none focus:outline-none';
    const errorClasses = error
        ? 'border-red-500 ring-red-500 focus:border-2'
        : 'border-gray-300';

    if (type === 'number')
        return (
            <div className="space-y-2">
                <Label htmlFor={id}>
                    {label} {required && <span>*</span>}
                </Label>
                <Input
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    type={type}
                    min={1}
                    max={10}
                    defaultValue={1}
                    value={value}
                    onChange={(e) => {
                        if (onChange) {
                            const { name, value } = e.target;
                            onChange(name, value);
                        }
                    }}
                    className="border rounded px-3 py-2 w-full outline-none focus:outline-none"
                />
            </div>
        );

    return (
        <div className="space-y-1">
            <Label htmlFor={id}>
                {label}
                {required && <span>*</span>}
            </Label>
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
                className={`${baseClasses} ${errorClasses}`}
                min={type === 'number' ? 1 : undefined}
                max={type === 'number' ? 10 : undefined}
            />
        </div>
    );
};
