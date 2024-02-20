import { Service } from "typedi";
import { Request, Response } from "express";
import { IUserService } from "../interfaces/IUserService";

@Service()
export class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public getUser(req: Request, res: Response): void {
    const user = this.userService.getUser();
    res.json(user);
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    let users;
    const queryRequest: {} = req.query;
    try {
      if (Object.keys(queryRequest).length === 0) {
        users = await this.userService.getAllUsers();
      } else {
        users = await this.userService.getUsersFiltedBy(queryRequest);
      }
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    try {
      const user = await this.userService.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({
          error: "User not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;
    try {
      const newUser = await this.userService.createUser(name, email);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    const userId = Number(req.params.id);
    try {
      await this.userService.deleteUser(userId);
      res.json({
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;
    const id = Number(req.params.id);
    try {
      const updatedUser = await this.userService.updateUser(id, name, email);
      res.status(201).json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
