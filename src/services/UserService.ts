// import { Service, Inject, Container } from "typedi";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserService } from "../interfaces/IUserService";
// import { UserRepositoryToken } from "../tokens/tokens";

// type Filters = any[];
// @Service()
export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public getUser(): string {
    return this.userRepository.getUser();
  }
  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
  public async getUsersFiltedBy(obj: {}): Promise<User[]> {
    return this.userRepository.getUsersFiltedBy(obj);
  }
  public async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.getUserById(id);
  }
  public async createUser(name: string, email: string): Promise<User> {
    return this.userRepository.createUser(name, email);
  }
  public async deleteUser(id: number): Promise<void> {
    return this.userRepository.deleteUser(id);
  }
  public async updateUser(
    id: number,
    name: string,
    email: string
  ): Promise<User> {
    return this.userRepository.updateUser(id, name, email);
  }
}
