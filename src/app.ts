import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/userRoutes";
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("../swagger.json");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware para facilitar a leitura do corpo das requisições
app.use(express.json());

// // Configuração do Swagger UI
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use("/users", userRoutes);

export default app;
