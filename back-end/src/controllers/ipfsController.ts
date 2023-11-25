// src/controllers/ipfsController.ts
import { Request, Response } from 'express';
import ipfsModel from '../models/ipfsModel';

const ipfsController = {
  getIPFSData: async (req: Request, res: Response) => {
    const { hash } = req.params;

    try {
      const data = await ipfsModel.getIPFSData(hash);
      res.json({ data });
    } catch (error) {
      console.error('Error fetching data from IPFS:', error);
      res.status(500).json({ error: 'Error fetching data from IPFS' });
    }
  },
};

export default ipfsController;
