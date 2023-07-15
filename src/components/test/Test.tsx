import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import Oscar from "./Oscar";
import Person from "./Person";
import PersonList from "./PersonList";
import Status from "./Status";

type GreetProps = {
  firstName: string;
  middleName: string;
  messageCount?: number; //for optional we question mark in front of type variable like messagecount which is optional or we can pass default value like below by  destructring
  isLoggedIn: boolean;
};

//passing an object
const personName = {
  first: "Bruce",
  last: "Wayne",
};

//passing an array of 3 objects
const nameList = [
  {
    first: "Bruce",
    last: "Wayne",
  },
  {
    first: "Clark",
    last: "Kent",
  },
  {
    first: "Princess ",
    last: "Diana",
  },
];

//component

const Test = ({
  firstName,
  middleName,
  messageCount = 0, //default value
  isLoggedIn,
}: GreetProps) => {
  return (
    <>
      <div className="d-flex ">
        <h2 className="text-center m-2 p-2 bg-black text-light w-50">
          Welcome {firstName}
        </h2>
        <h2 className="text-center m-2 p-2 bg-black text-light w-50">
          Welcome {middleName}
        </h2>
      </div>
      {isLoggedIn ? (
        <h2 className="text-center m-2 p-2 bg-black text-light">
          Welcome {firstName}
          {middleName} you have {messageCount} message
        </h2>
      ) : (
        <h2 className="text-center m-2 p-2 bg-black text-light">
          Welcome Guest, Please Login to see notification
        </h2>
      )}
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      {/* to pass text between open and closing tag  */}
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicpario!!!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </>
  );
};

export default Test;
