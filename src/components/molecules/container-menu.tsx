import { ReactNode } from 'react';

const ContainerMenu = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-blueLight text-gray-100 w-64 min-h-screen flex flex-col ">
            {children}
        </div>
    );
};

export default ContainerMenu;
