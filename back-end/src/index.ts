// src/index.ts
import express, { Request, Response } from 'express';
import ipfsClient from 'ipfs-http-client';

const app = express();
const ipfs = ipfsClient({ host: 'localhost', port: 5001, protocol: 'http' });

app.get('/ipfs/:hash', async (req: Request, res: Response) => {
  const { hash } = req.params;

  try {
    const fileBuffer = await ipfs.cat(hash);
    const data = fileBuffer.toString();
    res.json({ data });
  } catch (error) {
    console.error('Error fetching data from IPFS:', error);
    res.status(500).json({ error: 'Error fetching data from IPFS' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
