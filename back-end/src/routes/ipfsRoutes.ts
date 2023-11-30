// src/routes/ipfsRoutes.ts
import express from "express";
import customCollectionController from "../controllers/ipfsController";
import collectionMoralisController from "../controllers/collectionMoralisController";

const router = express.Router();

/**
 * @swagger
 * /ipfs/collection/{collectionAddress}:
 *  get:
 *    tags:
 *      - IPFS
 *    description: Get data from IPFS
 *    parameters:
 *      - in: path
 *        name: collectionAddress
 *        schema:
 *          type: string
 *        required: true
 *        description: Get collection data by address using moralis API
 *    responses:
 *      '200':
 *        description: Collection data from moralis API
 *      '500':
 *        description: Error fetching data
 */
router.get(
  "/collection/:collectionAddress",
  collectionMoralisController.getCollectionData
);

/**
 * @swagger
 * /ipfs/multi-collection:
 *  put:
 *    tags:
 *      - IPFS
 *    description: Get data from IPFS
 *    parameters:
 *      - in: body
 *        name: collectionAddress
 *        schema:
 *          type: object
 *        required: true
 *        description: Get collection data by address using moralis API
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *    responses:
 *      '200':
 *        description: Collection data from moralis API
 *      '500':
 *        description: Error fetching data
 */
router.put(
  "/multi-collection",
  collectionMoralisController.getMultiCollectionData
);

/**
 * @swagger
 * /ipfs/custom-collections/{walletAddress}:
 *  put:
 *    tags:
 *      - IPFS
 *    description: Create/Update a custom collection, if the user doenst have a bucket it will create one too.
 *    parameters:
 *      - in: body
 *        name: data
 *        schema:
 *          type: object
 *          properties:
 *            Body:
 *              type: array
 *              items:
 *                type: object
 *            Bucket:
 *              type: string
 *            Key:
 *              type: string
 *            Tagging:
 *              type: string
 *        description: Custom Collections by wallet address
 *    responses:
 *      '200':
 *        description: Custom collections by wallet address
 *      '500':
 *        description: Error fetching custom collections by wallet address
 *
 */
router.put(
  "/custom-collections/:walletAddress",
  customCollectionController.createDataByWallet
);

/**
 * @swagger
 * /ipfs/custom-collections/{walletAddress}/{bucket}/{collectionName}:
 *  get:
 *    tags:
 *      - IPFS
 *    description: Get collection data by address using moralis API
 *    parameters:
 *      - in: path
 *        name: walletAddress
 *        schema:
 *          type: string
 *        required: true
 *        description: Wallet address
 *      - in: path
 *        name: bucket
 *        schema:
 *          type: string
 *        required: true
 *        description: Optional bucket parameter
 *      - in: path
 *        name: collectionName
 *        schema:
 *          type: string
 *        required: true
 *        description: Collection name
 *    responses:
 *      '200':
 *        description: Custom collections by wallet address
 *      '500':
 *        description: Error fetching custom collections by wallet address
 */
router.get(
  "/custom-collections/:walletAddress/:bucket/:collectionName",
  customCollectionController.getDataByWalletAddress
);

/**
 * @swagger
 * /ipfs/votes:
 *  put:
 *    tags:
 *      - IPFS
 *    description: Create/Update a vote, if the user doesn't have a bucket it will create one too.
 *    parameters:
 *      - in: body
 *        name: data
 *        schema:
 *          type: object
 *          properties:
 *            Comment:
 *              type: object
 *            Vote:
 *              type: number
 *            Collection_contract_address:
 *              type: string
 *            VoterWallet:
 *              type: string
 *        description: Custom Collections by wallet address
 *    responses:
 *      '200':
 *        description: Vote by wallet address
 *      '500':
 *        description: Error making your vote by wallet address
 *
 */
router.put(
  "/votes",
  customCollectionController.createVoteByWallet
);

/**
 * @swagger
 * /ipfs/votes/{bucket}/{collectionAddress}:
 *  get:
 *    tags:
 *      - IPFS
 *    description: Create/Update a custom collection, if the user doenst have a bucket it will create one too.
 *    parameters:
 *      - in: path
 *        name: bucket
 *        schema:
 *          type: string
 *        required: true
 *        description: Optional bucket parameter
 *      - in: path
 *        name: collectionAddress
 *        schema:
 *          type: string
 *        required: true
 *        description: Collection name
 *    responses:
 *      '200':
 *        description: Votess by wallet address
 *      '500':
 *        description: Error fetching votes by wallet address
 *
 */
router.get(
  "/votes/:bucket/:collectionAddress",
  customCollectionController.getVotesByCollectionAddress
);

export default router;
