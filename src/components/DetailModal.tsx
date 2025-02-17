import React from "react";
import { ChartData } from "./ChartComponent";

interface DetailModalProps {
  isOpen: boolean;
  data: ChartData | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, data, onClose }) => {
  if (!isOpen || !data) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <h2>Data Point Details</h2>
        <p>
          <strong>Month:</strong> {data.name}
        </p>
        <p>
          <strong>UV:</strong> {data.uv}
        </p>
        <p>
          <strong>PV:</strong> {data.pv}
        </p>
        <p>
          <strong>AMT:</strong> {data.amt}
        </p>
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
