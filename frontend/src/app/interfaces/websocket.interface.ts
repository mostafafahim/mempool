import { ILoadingIndicators } from '../services/state.service';
import { Block, Transaction } from './electrs.interface';

export interface WebsocketResponse {
  block?: Block;
  blocks?: Block[];
  conversions?: any;
  txConfirmed?: boolean;
  historicalDate?: string;
  mempoolInfo?: MempoolInfo;
  vBytesPerSecond?: number;
  lastDifficultyAdjustment?: number;
  action?: string;
  data?: string[];
  tx?: Transaction;
  rbfTransaction?: Transaction;
  transactions?: TransactionStripped[];
  donationConfirmed?: boolean;
  loadingIndicators?: ILoadingIndicators;
  'track-tx'?: string;
  'track-address'?: string;
  'track-asset'?: string;
  'watch-mempool'?: boolean;
  'track-donation'?: string;
}

export interface MempoolBlock {
  blockSize: number;
  blockVSize: number;
  nTx: number;
  medianFee: number;
  totalFees: number;
  feeRange: number[];
  index: number;
}

export interface MempoolInfo {
  loaded: boolean;                 //  (boolean) True if the mempool is fully loaded
  size: number;                    //  (numeric) Current tx count
  bytes: number;                   //  (numeric) Sum of all virtual transaction sizes as defined in BIP 141.
  usage: number;                   //  (numeric) Total memory usage for the mempool
  maxmempool: number;              //  (numeric) Maximum memory usage for the mempool
  mempoolminfee: number;           //  (numeric) Minimum fee rate in BTC/kB for tx to be accepted.
  minrelaytxfee: number;           //  (numeric) Current minimum relay fee for transactions
}

export interface TransactionStripped {
  txid: string;
  fee: number;
  weight: number;
  value: number;
}

