// src/domain/repositories/UserRepository.ts
import { userService } from "@/services/userService";
import { UserDTO } from "@/domain/DTO/UserDTO";

export const UserRepository = {
  async getUsers(): Promise<UserDTO[]> {
    return await userService.fetchUsers();
  },
};
