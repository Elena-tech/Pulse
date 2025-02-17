// src/services/api.ts

import { ChartData } from "../components/ChartComponent";

// Fetch live crypto market data from CoinGecko
export const fetchCryptoData = async (): Promise<ChartData[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch crypto data");
  }
  const coins = await response.json();
  // Map the API data to our ChartData format:
  // - name: coin name
  // - uv: current price (we'll use this as our primary metric)
  // - pv: market cap
  // - amt: total volume
  return coins.map((coin: any) => ({
    name: coin.name,
    uv: coin.current_price,
    pv: coin.market_cap,
    amt: coin.total_volume,
  }));
};

export interface StockData {
  time: string;
  price: number;
}

export const fetchStockData = async (): Promise<StockData[]> => {
  // Using Alpha Vantage's demo API for MSFT intraday data.
  const response = await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stock data");
  }
  const data = await response.json();
  const timeSeries = data["Time Series (5min)"];
  if (!timeSeries) {
    throw new Error("Unexpected response structure");
  }
  // Transform the time series object into an array of { time, price }
  const stockData: StockData[] = Object.keys(timeSeries).map((time) => ({
    time,
    price: parseFloat(timeSeries[time]["1. open"]),
  }));
  // Sort data in ascending order by time (oldest first)
  return stockData.sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );
};
