import React from "react";
type StatusProps = {
  status: "loading" | "error" | "success";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "success") {
    message = "Data fetched succesfully";
  } else if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "error") {
    message = "error in fetching data";
  }

  return (
    <div>
      <h2 className="bg-dark text-danger text-center">{message}</h2>
    </div>
  );
};

export default Status;
