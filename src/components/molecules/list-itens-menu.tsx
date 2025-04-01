import { ItemMenu } from '../atom/Item-menu';

function ListItensMenu({
    itens
}: {
    itens: {
        icon: React.ReactNode;
        label: string;
        link: string;
    }[];
}) {
    return (
        <nav className="flex-1 pt-4">
            <ul>
                {itens.map((item, index) => (
                    <ItemMenu
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        link={item.link}
                    />
                ))}
            </ul>
        </nav>
    );
}
export { ListItensMenu };
