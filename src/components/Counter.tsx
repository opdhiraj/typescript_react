import React, { useState } from "react";
interface IPROPS {}
interface ISTATE {
  count: number;
}
const Counter: React.FC = () => {
  const [state, setState] = useState<ISTATE>({ count: 0 });
  //add
  const handleIncrement = () => {
    setState({ count: state.count + 1 });
  };

  //decrement
  const handleDecrement = () => {
    setState({ count: state.count - 1 });
  };
  return (
    <>
      <h1>Event Handling</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="display-3">{state.count}</h2>
              <button
                className="btn btn-success ms-3"
                onClick={handleIncrement}
              >
                Inc
              </button>
              <button
                className="btn btn-danger  ms-3"
                onClick={handleDecrement}
              >
                Dec
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
