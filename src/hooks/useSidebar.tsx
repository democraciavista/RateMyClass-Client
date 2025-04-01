'use client';
import {
    Bookmark,
    BookOpen,
    File,
    GraduationCap,
    Settings
} from 'lucide-react';
import { usePathname } from 'next/navigation';

function useSideBar() {
    const pathName = usePathname();
    const listItemsMenu: {
        label: string;
        link: string;
        icon: React.ReactNode;
    }[] = [
        {
            label: 'Disciplinas',
            icon: <BookOpen size={20} />,
            link: '/'
        },
        {
            label: 'Materiais',
            icon: <File size={20} />,
            link: '/materiais'
        },
        {
            label: 'Meu Curso',
            icon: <GraduationCap size={20} />,
            link: '/meu-curso'
        },
        {
            label: 'Disciplinas Favoritas',
            icon: <Bookmark size={20} />,
            link: '/disciplinas-favoritas'
        },
        {
            label: 'Materiais Favoritos',
            icon: <Bookmark size={20} />,
            link: '/materiais-favoritos'
        },
        {
            label: 'Configurações',
            icon: <Settings size={20} />,
            link: '/configuracoes'
        }
    ];
    function routeActibe(path: string) {
        return pathName === path;
    }

    return {
        listItemsMenu,
        routeActibe
    };
}

export { useSideBar };
