import React from "react";

const Checkbox = ({ title, enable, isEnable }) => {
  return (
      <div className="flex flex-row">
        <input
          type="checkbox"
          id={title}
          defaultValue={enable}
          className="m-2"
          onChange={() => isEnable((enable) => !enable)}
        />{" "}
        <label htmlFor={title}>{title}</label>
      </div>
  );
};

export default Checkbox;
