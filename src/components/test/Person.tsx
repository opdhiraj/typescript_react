import React from "react";
type personName = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: personName) => {
  return (
    <>
      <h1>
        {props.name.first} {props.name.last}
      </h1>
      ;
    </>
  );
};

export default Person;
