// src/controllers/ipfsController.ts
import { Request, Response } from "express";
import { createData, getIPFSData, getObjectByKey } from "../models/ipfsModel";
import {
  CreateVoteBody,
  CustomCollections,
  VoteBody,
  createIPFSRegister,
} from "../types/ipfsTypes";
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
    const { walletAddress, bucket, collectionName } = req.params;
    try {
      const data: any = await getObjectByKey({
        Bucket: bucket,
        Key: walletAddress,
      });
      const userCollection: CustomCollections[] = [];
      data.forEach((element: CustomCollections) => {
        if (
          element.collection_moralis_name &&
          element.collection_moralis_name === collectionName
        ) {
          userCollection.push(element);
        }
      });
      res.json(userCollection);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  createDataByWallet: async (req: Request, res: Response) => {
    const result = req.body;
    const collectionName = result.Body[0].collection_moralis_name;
    var currentCollection: CustomCollections[] = [];
    try {
      var oldData: any = await getObjectByKey({
        Bucket: result.Bucket,
        Key: result.Key,
      })
        .then((data) => data)
        .catch((err) => err);

      if (oldData.statusCode !== 404) {
        result.Body = JSON.stringify([...oldData, ...result.Body]);
      } else {
        result.Body = JSON.stringify(result.Body);
      }
      const data: any = await createData(result);
      res.json(data);
    } catch (error) {
      console.error("Error creating data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  getVotesByCollectionAddress: async (req: Request, res: Response) => {
    const { bucket, collectionAddress } = req.params;
    try {
      const data: any = await getObjectByKey({
        Bucket: bucket,
        Key: collectionAddress,
      });

      if (data.statusCode !== 404) {
        data.average_votes = Math.floor(data.vote_points / data.voters);
      } else {
        data.average_votes = 0; // Add the new key-value pair
      }

      res.json(data);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  getVotesByWalletAddress: async (req: Request, res: Response) => {
    const { bucket, collectionAddress, walletAddress } = req.params;
    try {
      const data: any = await getObjectByKey({
        Bucket: bucket,
        Key: collectionAddress,
      });

      if (data.statusCode !== 404) {
        data.average_votes = Math.floor(data.vote_points / data.voters);
      } else {
        data.average_votes = 0; // Add the new key-value pair
      }

      const filtered = data.comments.filter((result: any) => {
        return result.voter_wallet === walletAddress;
      });

      res.json(filtered);
    } catch (error) {
      console.error("Error fetching data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
  createVoteByWallet: async (req: Request, res: Response) => {
    const result: CreateVoteBody = req.body;
    var newData: createIPFSRegister = {
      Body: "",
      Bucket: "babysym-votes",
      Key: result.Collection_contract_address,
      Tagging: "",
    };

    var newBody: VoteBody = {
      collection_contract_address: result.Collection_contract_address,
      comments: [],
      voters: 100,
      vote_points: 365,
    };

    try {
      var oldData: any = await getObjectByKey({
        Bucket: "babysym-votes",
        Key: result.Collection_contract_address,
      })
        .then((data) => data)
        .catch((err) => err);

      if (oldData.statusCode !== 404) {
        // Comments register
        result.Comment.vote = result.Vote;
        result.Comment.voter_wallet = result.VoterWallet;
        //
        oldData.comments.push(result.Comment);
        oldData.voters += 1;
        oldData.vote_points += result.Vote;
        newData.Body = JSON.stringify(oldData);
      } else {
        // Comments register
        result.Comment.vote = result.Vote;
        result.Comment.voter_wallet = result.Comment.voter_wallet;
        newBody.comments = [];
        newBody.comments.push(result.Comment);
        newBody.voters = 1;
        newBody.vote_points = result.Vote;
        newData.Body = JSON.stringify(newBody);
      }
      const data: any = await createData(newData);

      res.json(data);
    } catch (error) {
      console.error("Error creating data from IPFS:", error);
      res.status(500).json({ error: "Error fetching data from IPFS" });
    }
  },
};

export default ipfsController;
