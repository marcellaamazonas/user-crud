const swaggerAutogen = require("swagger-autogen")();

const options = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/userRoutes.ts"];

swaggerAutogen(outputFile, routes, options);
