import React from "react";
interface IPROPS {
  name: String;
  title: String;
  age?: number; // ? indicates optional
}
let Customer: React.FC<IPROPS> = ({ name, title, age }) => {
  return (
    <>
      <h1>Customer component </h1>
      <h4>Name:{name}</h4>
      <h4>Title:{title}</h4>
      <h4>Age:{age}</h4>
    </>
  );
};

export default Customer;
