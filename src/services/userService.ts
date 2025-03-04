// src/services/userService.ts
import { httpClient } from "@/infrastructure/httpClient";
import { UserDTO } from "@/domain/DTO/UserDTO";

export const userService = {
  async fetchUsers(): Promise<UserDTO[]> {
    const response = await httpClient.get("/users");
    return response.data;
  },
};
