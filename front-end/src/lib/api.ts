import axios from "axios";
import { CreateVote, IPFSBody } from "../models/apiModels";

export const baseURL = "http://198.100.154.62:3001";
// http://198.100.154.62:3001
export const api = axios.create({
  baseURL,
});

export const getNFTCollection = async (address: string): Promise<any> => {
  const response = await api.get(`/ipfs/collection/${address}`);
  return response.data;
};

export const getMultiCollectionData = async (data: any): Promise<any> => {
  const response = await api.put("/ipfs/multi-collection", data);
  return response.data;
};

export const createDataByWallet = async (data: IPFSBody): Promise<any> => {
  const response = await api.put(`/ipfs/custom-collections/${data.Key}`, data);
  return response.data;
};

export const getVotesByWalletAndCollectionAddress = async (
  walletAddress: string,
  collectionAddress: string
): Promise<any> => {
  const response = await api.get(
    `/ipfs/votes/babysym-votes/${collectionAddress}/${walletAddress}`
  );
  return response.data;
};

export const getVotesByCollectionAddress = async (
  collectionAddress: string
): Promise<any> => {
  const response = await api.get(
    `/ipfs/votes/babysym-votes/${collectionAddress}`
  );
  return response.data;
};

export const getDataByWalletAddress = async (
  walletAddress: string,
  bucket: string,
  collectionName: string
): Promise<any> => {
  const response = await api.get(
    `/ipfs/custom-collections/${walletAddress}/${bucket}/${collectionName}`
  );
  return response.data;
};

export const createVoteByCollection = async (
  data: CreateVote
): Promise<any> => {
  const newData = {
    Comment: data.comment,
    Vote: data.vote_number,
    Collection_contract_address: data.collectionAddress,
    VoterWallet: data.walletAddress,
  }
  const response = await api.put(`/ipfs/votes`, newData);
  return response.data;
};

export const getVoteDataByWalletAddress = async (
  walletAddress: string,
  bucket: string
): Promise<any> => {
  const response = await api.get(`/ipfs/votes/${walletAddress}/${bucket}`);
  return response.data;
};
