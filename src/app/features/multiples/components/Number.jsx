import React from "react";

const Number = ({
  number,
  setSelectedNumber,
  color,
  selectedNumber,
  tabPanelId,
  id,
}) => {
  return (
    <div
      role="tab"
      id={id}
      name = {number}
      aria-selected={selectedNumber === number}
      aria-label={number}
      aria-controls={tabPanelId}
      tabIndex={number}
      className={`grid-item ${color}`}
      onClick={() => setSelectedNumber(number)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setSelectedNumber(number);
        }
      }}
    >
      {number}
    </div>
  );
};

export default Number;
