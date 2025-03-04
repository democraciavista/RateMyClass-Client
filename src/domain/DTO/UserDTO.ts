// src/domain/dto/UserDTO.ts
export type UserDTO = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};
