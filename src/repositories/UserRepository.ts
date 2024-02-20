import { Service } from "typedi";
import { User } from "../models/User";
import sqlite3 from "sqlite3";
import { dbGet } from "./orm";

@Service()
export class UserRepository {
  private db: sqlite3.Database;
  constructor(db: sqlite3.Database) {
    this.db = db;
  }
  public getUser(): string {
    return "Usuário do Repositório";
  }
  public getAllUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM users", (err, rows: User[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  public getUsersFiltedBy(obj: {}): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const values: string[] = Object.values(obj);

      const queryCall = (obj: {}) => {
        const keys: string[] = Object.keys(obj);
        const whereClause = keys.map((key) => `${key} = ?`).join(" AND ");
        return `SELECT * FROM users WHERE ${whereClause}`;
      };

      this.db.all(queryCall(obj), values, (err, rows: User[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  public async getUserById(id: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (err, row: User | undefined) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
      // return dbGet(id, "users");
    });
  }

  public createUser(name: string, email: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID, name, email });
          }
        }
      );
    });
  }

  public deleteUser(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  public updateUser(id: number, name: string, email: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [name, email, id],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id, name, email });
          }
        }
      );
    });
  }
}
