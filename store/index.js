import { defineStore } from "pinia";

import StocksStore from "./StocksStore";

export const useStocksStore = defineStore('Stocks', StocksStore);