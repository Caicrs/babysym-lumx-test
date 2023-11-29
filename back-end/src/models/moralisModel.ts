// src/models/ipfsModel.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
});

export async function getDataByContractAddress(address: string): Promise<any> {
  const chain = EvmChain.ETHEREUM;
  return new Promise(async (resolve, reject) => {
    const response = await Moralis.EvmApi.nft.getContractNFTs({
      address,
      chain,
    });
    resolve(response);
  });
}
