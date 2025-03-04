import { useQuery } from "@tanstack/react-query";
import { UserRepository } from "@/domain/repositories/UserRepository";
import { UserDTO } from "@/domain/DTO/UserDTO";

export function useUsers() {
  return useQuery<UserDTO[]>({
    queryKey: ["users"],
    queryFn: UserRepository.getUsers,
    staleTime: 1000 * 60 * 5, 
  });
}
