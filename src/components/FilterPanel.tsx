import React from "react";

interface FilterPanelProps {
  minValue: number;
  setMinValue: (value: number) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ minValue, setMinValue }) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor="minValue">Min UV Value: </label>
      <input
        type="number"
        id="minValue"
        value={minValue}
        onChange={(e) => setMinValue(Number(e.target.value))}
        style={{ marginLeft: "0.5rem", padding: "0.3rem" }}
      />
    </div>
  );
};

export default FilterPanel;
