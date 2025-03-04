import { useQuery } from '@tanstack/react-query';

export function TestComponent() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('/api/users');
            if (!res.ok) throw new Error('Erro ao carregar usuários');
            return res.json();
        }
    });

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar usuários</p>;

    return (
        <ul>
            {data.map((user: { id: string; name: string }) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
