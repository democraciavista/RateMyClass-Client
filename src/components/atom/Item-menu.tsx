'use client';
import { useSideBar } from '@/hooks/useSidebar';
import clsx from 'clsx';
import Link from 'next/link';
import { memo } from 'react';

const ItemMenu = memo(
    ({
        icon,
        label,
        link
    }: {
        icon: React.ReactNode;
        label: string;
        link: string;
    }) => {
        const { routeActibe } = useSideBar();
        return (
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                <Link
                    className="flex items-center w-full hover:scale-105 transition-all"
                    href={link}
                >
                    <span
                        className={clsx('text-black', {
                            'text-blueDark': routeActibe(link)
                        })}
                    >
                        {icon}
                    </span>
                    <span
                        className={clsx('ml-4 text-black ', {
                            'text-blueDark': routeActibe(link)
                        })}
                    >
                        {label}
                    </span>
                </Link>
            </li>
        );
    }
);

export { ItemMenu };
