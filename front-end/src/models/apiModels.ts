import { MoralisNFT } from "./moralis";

export interface IPFSBody {
    Body: BodyCollection[]
    Bucket: string
    Key: string
    Tagging?: string
  }

  export interface CustomCollectionBody{
    name: string;
    customCollections: CollectionMoralisDaum[]
  }

  export interface BodyCollection {
    collection_contract_address: string
    collection_moralis_name: string
    collection_moralis_data: CollectionMoralisDaum[]
    collection_link: string
  }
  
  export interface CollectionMoralisDaum {
    token_address: string
    token_id: string
    amount: string
    token_hash: string
    block_number_minted: string
    updated_at: any
    contract_type: string
    name: string
    symbol: string
    token_uri: string
    metadata: string
    last_token_uri_sync: string
    last_metadata_sync: string
    minter_address: string
    possible_spam: boolean
    verified_collection: boolean
  }

  export interface CreateVote{
    vote_number: number,
    collectionAddress: string,
    walletAddress: string,
    comment?: Comment
  }
  
  export interface Votes {
    voter_wallet: string
    message: string
    vote: number
  }

  export interface VotesBody {
    collection_contract_address: string
    comments: Comment[]
    voters: number
    vote_points: number
    average_votes: number
  }
  
  export interface Comment {
    voter_wallet: string
    message?: string
    vote: number
  }
  