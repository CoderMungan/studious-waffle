import { SwaggerDefinition, Options } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Node API",
    version: "1.0.0",
    description: "CoderMungan Api's",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};

const swaggerOptions: Options = {
  swaggerDefinition,
  apis: ["./src/router/*.ts"],
};

export default swaggerOptions;
