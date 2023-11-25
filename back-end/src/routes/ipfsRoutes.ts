// src/routes/ipfsRoutes.ts
import express from 'express';
import ipfsController from '../controllers/ipfsController';

const router = express.Router();

router.get('/:hash', ipfsController.getIPFSData);

export default router;
