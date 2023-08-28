import { defineStore } from "pinia";

import StocksStore from "./StocksStore";
import CryptoStore from "./CryptoStore";

export const useStocksStore = defineStore("Stocks", StocksStore);
export const useCryptoStore = defineStore("Crypto", CryptoStore);
