import { User } from "../models/User";

export interface IUserService {
  getUser(): string;
  getAllUsers(): Promise<User[]>;
  getUsersFiltedBy(obj: {}): Promise<User[]>;
  getUserById(id: number): Promise<User | undefined>;
  createUser(name: string, email: string): Promise<User>;
  deleteUser(id: number): Promise<void>;
  updateUser(id: number, name: string, email: string): Promise<User>;
}
