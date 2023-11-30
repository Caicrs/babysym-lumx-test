import { Comments } from "aws-sdk/clients/codecommit";

export interface createIPFSRegister {
  Body: string;
  Bucket: string;
  Key: string;
  Tagging: string;
}

export interface CustomCollections {
  collection_contract_address: string
  collection_moralis_name: string
  collection_moralis_data: CollectionMoralisDaum[]
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

// VOTE TYPE
export interface iIPFSVote {
  Body: Body
  Bucket: string
  Key: string
  Tagging: string
}

export interface VoteBody {
  collection_contract_address: string
  collection_moralis_name?: string
  comments?: VoteComment[]
  voters: number
  vote_points: number
  collection_link?: string
}

export interface VoteComment {
  voter_wallet: string
  message: string
  vote: number
}

export interface CreateVoteBody {
  Comment: VoteComment
  Vote: number;
  Collection_contract_address: string
  VoterWallet: string
}