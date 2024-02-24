import React from "react";

const Button = ({ title, buttonText,setButtonText, copiedItem }) => {
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(copiedItem);
    return setButtonText("Copied");
  };

  return (
    <button
      className={`h-12 w-1/12 ${buttonText==='Copy'? 'bg-blue-400':'bg-green-500'} rounded-e-2xl`}
      onClick={copyPasswordToClipboard}
    >
      {title}
    </button>
  );
};

export default Button;
