import { useUsers } from "./hooks";

export default function UsersPage() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar usuários</p>;

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
