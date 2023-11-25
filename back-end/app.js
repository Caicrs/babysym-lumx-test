// src/index.ts
import express from 'express';
import ipfsRoutes from './routes/ipfsRoutes';

const app = express();

app.use('/ipfs', ipfsRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
