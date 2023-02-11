import { useState } from "react";
import React from "react";
import "./HelloWorld.css";
const HelloWorld = () => {
    const [value, setvalue] = useState(0);
    const increment = ()=>{
        setvalue(value+1)
    };
  return (
    <>
      <div className="">{value}</div>
      <button onClick={()=>increment()}>Increment</button>
    </>
  );
};

export default HelloWorld;
