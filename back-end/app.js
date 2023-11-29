// src/index.ts
import express from 'express';
import ipfsRoutes from './routes/ipfsRoutes';

const app = express();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'BabySym API',
      version: '1.0.0',
    },
  },
  apis: ['src/index.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use('/ipfs', ipfsRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
