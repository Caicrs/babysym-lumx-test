// src/controllers/ipfsController.ts
import { Request, Response } from "express";
import { createData, getIPFSData, getObjectByKey } from "../models/ipfsModel";
require("dotenv").config();


const ipfsController = {
  getIPFSData: async (req: Request, res: Response) => {
    const { hash } = req.params;
    try {
      const data: any = await getIPFSData();
      res.json(data);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  getDataByWalletAddress: async (req: Request, res: Response) => {
    const { walletAddress, bucket } = req.params;
    try {
      const data: any = await getObjectByKey({
        Bucket: bucket,
        Key: walletAddress,
      });
      res.json(data);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  createDataByWallet: async (req: Request, res: Response) => {
    const result = req.body;
    try {
      const oldData: any = await getObjectByKey({
        Bucket: result.Bucket,
        Key: result.Key,
      });

      if (oldData.statusCode !== 404) {
        if (Array.isArray(oldData)) {
          result.Body = JSON.stringify([...oldData, result.Body]);
          console.log(result.Body);
        }
        const data: any = await createData(result);
        res.json(data);
      } else {
        const data: any = await createData(result);
        res.json(data);
      }
    } catch (error) {
      console.error("Error creating data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
};

export default ipfsController;
