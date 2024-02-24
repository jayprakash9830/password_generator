import React, { useCallback, useEffect, useState } from "react";
import Checkbox from "./Component/Checkbox";
import Button from "./Component/Button";
import Range from "./Component/Range";
import Textbox from "./Component/Textbox";

const App = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [buttonText, setButtonText] = useState("Copy");

  const genratePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let newPassword = "";
    if (isNumber) {
      str += "0123456789";
    }
    if (isSpecial) {
      str += "!@#$%^&*";
    }
    for (let i = 0; i < length; i++) {
      newPassword += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(newPassword);
    setButtonText("Copy");
  }, [length, isNumber, isSpecial]);

  useEffect(() => {
    genratePassword();
  }, [length, isNumber, isSpecial, genratePassword]);

  return (
      <div className=" flex flex-col h-screen justify-start alig">
        <div className="container h-72 w-7/12 mx-auto bg-gray-600 rounded-3xl mt-16">
          <p className="text-white text-3xl text-center mt-8 font-bold">
            {"Password Genrator"}
          </p>
          <div className="flex  flex-row mx-auto mt-8">
            <Textbox placeholder={"Password"} innerText={password} />
            <Button
              title={buttonText}
              buttonText={buttonText}
              setButtonText={setButtonText}
              copiedItem={password}
            />
          </div>
          <div className="flex flex-row mx-auto mt-12 justify-start w-auto">
            <div className="ml-4 mt-[-0.5rem] text-xl text-orange-500 space-x-12 w-5/12">
              <Range min={0} max={100} length={length} onChange={setLength} />
              {"Length " + length}
            </div>
            <div className="flex flex-row ml-4 mt-[-0.5rem] text-xl text-orange-500 space-x-12 w-7/12">
              <Checkbox
                title={"Number"}
                enable={isNumber}
                isEnable={setIsNumber}
              />
              <Checkbox
                title={"Special Character"}
                enable={isSpecial}
                isEnable={setIsSpecial}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;