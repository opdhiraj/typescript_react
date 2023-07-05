import React, { useState } from "react";

interface ISTATE {
  name: String;
  title: String;
}
interface IPROPS {
  name: String;
  age: number;
}
let FunComp: React.FC<IPROPS> = ({ name, age }) => {
  const [state, setState] = useState<ISTATE>({ name: "prakash", title: "TA" });
  return (
    <>
      <h1 className="bg-success p-2 text-white text-center">Functional comp</h1>
      <div className="border px-4 bg-light mb-4">
        <h3>
          Name:<b>{name}</b>
        </h3>
        <h3>Age:{age}</h3>
      </div>
      <div className="col-md-9 p-2 card">
        <h3> Values from state</h3>
        <h4>Name:{state.name}</h4>
        <h4>Name:{state.title}</h4>
      </div>
    </>
  );
};

export default FunComp;
