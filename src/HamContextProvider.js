import React, { useState } from "react";

export const HamContext = React.createContext();

function HamContextProvider(props) {
  const [hamActive, setHamActive] = useState(false);

  const hamHandler = function () {
    setHamActive((prev) => !prev);
  };
  console.log(props.children);
  return (
    <HamContext.Provider value={{ hamActive, hamHandler }}>
      {props.children}
    </HamContext.Provider>
  );
}

export default HamContextProvider;
