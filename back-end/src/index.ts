import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
import { Request, Response } from "express";
import ipfs from "ipfs-http-client"; // Assuming you have ipfs imported
import ipfsRoutes from "./routes/ipfsRoutes";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file


const app = express();
app.use(express.json());
app.use(cors());
// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "BabySym API",
      version: "1.0.0",
      description: "This is the API documentation for the BabySym application.",
    },
  },
  apis: ["src/routes/ipfsRoutes.ts"],
};




const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/ipfs", ipfsRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
