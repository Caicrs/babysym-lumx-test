// src/controllers/voteController.ts
import { Request, Response } from "express";
import {
  getDataByContractAddress,
} from "../models/moralisModel";

const collectionMoralisController = {
  getCollectionData: async (req: Request, res: Response) => {
    const { collectionAddress } = req.params;
    try {
      const data: any = await getDataByContractAddress(collectionAddress);
      res.json(data);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  getMultiCollectionData: async (req: Request, res: Response) => {
    const result = req.body;
    const collections: any[] = [];
    if (result.data && result.data.length >= 1) {
      // Use Promise.all to wait for all async operations to complete
      try {
        await Promise.all(
          result.data.map(async (res: any) => {
            const dataCollection: any = await getDataByContractAddress(res);
            collections.push(dataCollection);
          })
        );
        console.log;
        res.json(collections);
      } catch (error) {
        console.error("Error fetching data from IPFS:", error);
        res.status(500).json({ error: "Error fetching data from IPFS" });
      }
    } else {
      res.json(result);
    }
  },
};

export default collectionMoralisController;
