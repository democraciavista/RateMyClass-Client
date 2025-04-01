'use client';
import { type Control, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import clsx from 'clsx';

type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
    control: Control;
    name: string;
    error?: boolean;
};

function InputSearch({ className, control, name, ...props }: InputSearchProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                    className={clsx(`flex-grow ${className}`, {
                        'border-red-500': props.error
                    })}
                    type="text"
                    placeholder={props.placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    {...props}
                />
            )}
        />
    );
}
export { InputSearch };
