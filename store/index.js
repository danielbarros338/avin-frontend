import { defineStore } from "pinia";

import StocksStore from "./StocksStore";
import CryptoStore from "./CryptoStore";
import InflationStore from "./InflationStore";

export const useStocksStore = defineStore("Stocks", StocksStore);
export const useCryptoStore = defineStore("Crypto", CryptoStore);
export const useInflationStore = defineStore("Inflation", InflationStore);
