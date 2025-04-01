import { ReactNode } from 'react';

type IconWrapperProps = {
    children: ReactNode;
};

export const IconWrapper = ({ children }: IconWrapperProps) => (
    <div className="bg-gray-100 p-3 rounded-full mr-4">{children}</div>
);
