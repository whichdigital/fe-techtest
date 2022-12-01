import React, { Fragment, useState } from "react";
import { getStyle } from "../util/helper";
import Number from "./Number";

const NumberGrid = () => {
  const max = 144;
  const [numbers] = useState(
    [...Array(max).keys()].map((i) => i + 1)
  );
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <div className="card">
      <div className="grid" role="tablist" aria-label="List of Tabs">
        {numbers.map((number) => (
          <div key={number} role="presentation">
            <Number
              tabPanelId="gridTabPanel"
              id={`gridTab${number}`}
              number={number}
              setSelectedNumber={setSelectedNumber}
              color={getStyle(number, selectedNumber)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberGrid;
