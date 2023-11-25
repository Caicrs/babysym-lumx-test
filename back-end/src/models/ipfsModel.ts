// src/models/ipfsModel.ts
import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient({ host: 'localhost', port: 5001, protocol: 'http' });

const ipfsModel = {
  getIPFSData: async (hash: string) => {
    try {
      const fileBuffer = await ipfs.cat(hash);
      return fileBuffer.toString();
    } catch (error) {
      throw error;
    }
  },
};

export default ipfsModel;
