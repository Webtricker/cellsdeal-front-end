"use client";

import { Slider } from "@/components/ui/slider";
// import { useState } from "react";


export default function PriceRange() {
  // const STEP = 2;
  // const MIN = 30;
  // const MAX = 1000;

  // const [values, setValues] = useState([50, 100]);
  return (
    <div className="w-full flex items-center gap-2">
      <p>20</p>
      <Slider
        className=""
        defaultValue={[50, 200]}
        // value={}
        step={1}
        min={20}
        max={1000}
      />
      <p>1000</p>
    </div>
  );
}
