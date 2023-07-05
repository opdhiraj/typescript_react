import React, { useState } from "react";
//function with parameters

interface ISTATE {
  message: string;
}
const Youtube: React.FC = () => {
  const [state, setState] = useState<ISTATE>({ message: "Welcome" });
  const handleGreet = (greet: string): void => {
    setState({ message: greet });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card mt-4">
            <div className="card-body">
              <h1 className="m-3">{state.message}</h1>
              <button
                className="btn btn-danger ms-2"
                onClick={() => handleGreet("LIKE")}
              >
                Like
              </button>
              <button
                className="btn btn-success ms-2"
                onClick={() => handleGreet("SHARE")}
              >
                Share
              </button>
              <button
                className="btn btn-info ms-2"
                onClick={() => handleGreet("SUBSCRIBE")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
