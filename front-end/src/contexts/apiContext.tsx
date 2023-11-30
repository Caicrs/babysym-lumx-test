/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext, useState } from "react";
import {
  createDataByWallet,
  createVoteByCollection,
  getDataByWalletAddress,
  getNFTCollection,
  getVotesByCollectionAddress,
} from "../lib/api";
import { useGeneral } from "./GeneralContext";
import { MoralisNFTOriginal } from "../models/moralis";
import SubmodalShareLink from "../components/submodal-share-link";
import {
  CreateVote,
  CustomCollectionBody,
  IPFSBody,
  VotesBody,
} from "../models/apiModels";

interface ContextProps {
  nftCollectionSearched: any;
  getUserData: (address: string) => void;
  createCustomCollection: (data: CustomCollectionBody) => void;
  getCustomCollectionData: (address: string, collectionName: string) => void;
  votes: VotesBody;
  setVotes: React.Dispatch<React.SetStateAction<VotesBody>>;
  createVoteCollection: (data: CreateVote) => void;
}

export const ApiContext = createContext<ContextProps>({} as ContextProps);

export const ApiProvider = ({ children }: any) => {
  const { setIsLoading, wallet, setIsModalOpened } =
    useGeneral();
  const [nftCollectionSearched, setNftCollectionSearched] = useState<any>(null);
  const [votes, setVotes] = useState<VotesBody>();

  async function getUserData(address: string) {
    //  setIsLoading(true);
    setNftCollectionSearched(null);
    try {
      const response = await getNFTCollection(address).then((res) => res);
      const formated = response.result.map((res: MoralisNFTOriginal) => {
        const newMetadata = JSON.parse(res.metadata);
        res.metadata = newMetadata;
        return res;
      });
      setNftCollectionSearched(formated);
      // setIsLoading(false);
      return response;
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  }

  async function createCustomCollection(dataCollection: CustomCollectionBody) {
    setIsLoading(true);
    try {
      const data: IPFSBody = {
        Bucket: "lumx-test-1",
        Key: wallet.address,
        Body: [
          {
            collection_contract_address:
              dataCollection.customCollections[0].token_address,
            collection_link: `/customized-collection/${wallet.address}/${dataCollection.customCollections[0].name}`,
            collection_moralis_data: dataCollection.customCollections,
            collection_moralis_name: dataCollection.customCollections[0].name,
          },
        ],
      };
      await createDataByWallet(data).then((res) => res);
      setIsLoading(false);
      setIsModalOpened({
        title: "Share link",
        opened: true,
        body: (
          <SubmodalShareLink
            link={`http://localhost:3000/customized-collection/${data.Key}/${dataCollection.customCollections[0].name}`}
          />
        ),
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function createVoteCollection(data: CreateVote) {
    setIsLoading(true);
    try {
      await createVoteByCollection(data).then((res) => res);
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function getCustomCollectionData(
    address: string,
    collectionName: string
  ) {
    //  setIsLoading(true);
    try {
      const response: any = await getDataByWalletAddress(
        address,
        "lumx-test-1",
        collectionName
      ).then((res) => res);

      getVotesData(response[0].collection_contract_address);
      setNftCollectionSearched(response);
      // setIsLoading(false);
      return response;
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  }

  async function getVotesData(collectionAddress: string) {
    try {
      const response = await getVotesByCollectionAddress(
        collectionAddress
      ).then((res) => res);
      console.log(response);
      setVotes(response);
      // setIsLoading(false);
      return response;
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  }

  return (
    <ApiContext.Provider
      value={{
        createVoteCollection,
        votes,
        setVotes,
        getCustomCollectionData,
        createCustomCollection,
        nftCollectionSearched,
        getUserData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = (): ContextProps => useContext(ApiContext);
