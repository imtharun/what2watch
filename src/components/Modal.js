import React, { useContext } from "react";
import { HamContext } from "../HamContextProvider";

export default function Modal(props) {
  const { hamActive } = useContext(HamContext);
  return (
    <div className={`backdrop-blur-${hamActive ? "3xl" : "none"}`}>
      {props.children}
    </div>
  );
}
