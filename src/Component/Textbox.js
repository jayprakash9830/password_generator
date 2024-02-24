import React from "react";

const Textbox = ({ placeholder, innerText }) => {
  return (
    <input
      type="text"
      id="passwordBox"
      className="h-12 w-10/12 ml-12 rounded-s-3xl border-black focus:border-none outline-none text-xl px-4 text-orange-500"
      readOnly
      value={innerText}
      placeholder={placeholder}
    />
  );
};

export default Textbox;
