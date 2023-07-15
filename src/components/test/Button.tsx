import React from "react";
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className="btn btn-info "
      onClick={(event) => props.handleClick(event, 1)}
    >
      Button Click
    </button>
  );
};

export default Button;
