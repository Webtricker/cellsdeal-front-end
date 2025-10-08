"use client";

import { useState } from "react";
import { Range } from "react-range";


export default function PriceRange() {
  const STEP = 2;
  const MIN = 30;
  const MAX = 1000;

  const [values, setValues] = useState([50, 100]);

  return (
    <div className="w-full">
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-[6px] bg-gray-300 rounded-md relative"
          >
            <div
              className="absolute h-[6px] bg-blue-500 rounded-md"
              style={{
                left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                right: `${100 - ((values[1] - MIN) / (MAX - MIN)) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="h-4 w-4 rounded-full bg-blue-500 shadow-md cursor-pointer"
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-700">
              ${values[index].toLocaleString()}
            </div>
          </div>
        )}
      />
    </div>
  );
}
