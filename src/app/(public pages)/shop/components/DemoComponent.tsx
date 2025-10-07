 "use client";

import { useState } from "react";
import { Range } from "react-range";

export const PriceRangeSlider = () => {
  const STEP = 500;
  const MIN = 1000;
  const MAX = 50000;

  const [values, setValues] = useState([10000, 30000]);

  return (
    <div className="w-full max-w-sm">
      <p className="font-medium mb-2">Price Range</p>

      {/* Price values */}
      <div className="text-sm font-semibold text-gray-700 mb-3 text-center">
        ${values[0].toLocaleString()} - ${values[1].toLocaleString()}
      </div>

      {/* Slider */}
    
    </div>
  );
}
