import React from "react";
type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return (
    <div>
      <h1 className="text-center text-primary ">{props.children}</h1>
    </div>
  );
};

export default Oscar;
