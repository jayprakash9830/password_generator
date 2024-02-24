import React from "react";

const Range = ({min,max,length,onChange}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={length}
      className="appearance-none w-6/12 h-3 bg-blue-500 rounded-md outline-none ml-12 mr-4 cursor-pointer"
      onChange={(e)=>onChange(e.target.value)}
      style={{
        backgroundImage: `linear-gradient(to right, rgb(59 130 246 / var(--tw-bg-opacity)) ${length}%, white ${length}%)`,
      }}
    />
  );
};

export default Range;
