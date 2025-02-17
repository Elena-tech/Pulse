// src/components/StockDashboard.tsx

import React, { useState, useEffect } from "react";
import { fetchStockData, StockData } from "../services/api";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "../styles/StockDashboard.css";

const StockDashboard: React.FC = () => {
  const [data, setData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStockData()
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch stock data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="stock-dashboard">
      <h2>Stock Data for MSFT (Intraday)</h2>
      {loading && <p>Loading stock data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && data.length > 0 && (
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* Display only the time portion (HH:MM) */}
          <XAxis dataKey="time" tickFormatter={(time) => time.slice(11, 16)} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
    </div>
  );
};

export default StockDashboard;
