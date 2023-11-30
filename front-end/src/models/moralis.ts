export interface MoralisNFTOriginal {
  token_address: string;
  token_id: string;
  amount: string;
  token_hash: string;
  block_number_minted: string;
  updated_at: any;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: string;
  last_token_uri_sync: string;
  last_metadata_sync: string;
  minter_address: string;
  possible_spam: boolean;
  verified_collection: boolean;
}

export interface MoralisNFT {
  token_address: string;
  token_id: string;
  amount: string;
  token_hash: string;
  block_number_minted: string;
  updated_at: any;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: MetadataNFT;
  last_token_uri_sync: string;
  last_metadata_sync: string;
  minter_address: string;
  possible_spam: boolean;
  verified_collection: boolean;
}

export interface MetadataNFT {
  name: string;
  symbol: string;
  description: string;
  image: string;
  animation_url: string;
  attributes: Attribute[];
  properties: Properties;
  points: Points;
  rank: number;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface Properties {
  files: File[];
  category: string;
  creators: Creator[];
}

export interface File {
  uri: string;
  type: string;
}

export interface Creator {
  address: string;
  share: number;
}

export interface Points {
  amount: number;
  last_updated: number;
}
