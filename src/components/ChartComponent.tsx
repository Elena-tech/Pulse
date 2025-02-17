import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export interface ChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface ChartComponentProps {
  data: ChartData[];
  onDataPointClick?: (data: ChartData) => void;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  onDataPointClick,
}) => {
  const handleClick = (e: any) => {
    // When a data point is clicked, Recharts provides an activePayload.
    if (
      onDataPointClick &&
      e &&
      e.activePayload &&
      e.activePayload.length > 0
    ) {
      onDataPointClick(e.activePayload[0].payload);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Monthly Data</h2>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        onClick={handleClick}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
