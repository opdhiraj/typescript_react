import React, { useState } from "react";

interface ISTATE {
  name: String;
  title: String;
}

let About: React.FC = () => {
  const [state, setState] = useState<ISTATE>({ name: "prakash", title: "TA" });
  return (
    <>
      <h1 className="bg-success p-2 text-white text-center">About comp</h1>
      <div className="border px-4 bg-light mb-4"></div>
      <div className="col-md-9 p-2 card">
        <h3> About</h3>
        <h4>Name:{state.name}</h4>
        <h4>Name:{state.title}</h4>
      </div>
    </>
  );
};

export default About;
