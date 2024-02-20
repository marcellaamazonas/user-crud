// // container.ts
// import "reflect-metadata";
// import { Container } from "typedi";
// import { UserService } from "./services/UserService";
// import { UserRepository } from "./repositories/UserRepository";
// import { UserServiceToken, UserRepositoryToken } from "./tokens/tokens";
// import sqlite3 from "sqlite3";

// const db = new sqlite3.Database("database.db");

// console.log("Registrando serviços no contêiner...");
// Container.set(
//   UserServiceToken,
//   new UserService(Container.get(UserRepositoryToken))
// );
// Container.set(UserRepositoryToken, new UserRepository(db));
// console.log("Serviços registrados no contêiner com sucesso!");
