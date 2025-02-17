// src/components/Dashboard.tsx

import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import ChartComponent, { ChartData } from "./ChartComponent";
import FilterPanel from "./FilterPanel";
import DetailModal from "./DetailModal";
import { fetchCryptoData } from "../services/api";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [minValue, setMinValue] = useState<number>(0);
  const [selectedData, setSelectedData] = useState<ChartData | null>(null);

  useEffect(() => {
    fetchCryptoData()
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch crypto data");
        setLoading(false);
      });
  }, []);

  // Filter the data based on the minimum current price (uv)
  const filteredData = data.filter((item) => item.uv >= minValue);

  return (
    <div className="dashboard">
      <p>Welcome to the Pulse Lite Dashboard!</p>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <>
          <FilterPanel minValue={minValue} setMinValue={setMinValue} />
          <ChartComponent
            data={filteredData}
            onDataPointClick={(d) => setSelectedData(d)}
          />
          <DetailModal
            isOpen={!!selectedData}
            data={selectedData}
            onClose={() => setSelectedData(null)}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
