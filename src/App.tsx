import React from "react";
import "./App.css";
import AuthUser from "./components/AuthUser";
// import Login from "./components/Login";
// import Counter from "./components/Counter";
// import Youtube from "./components/Youtube";
// import Customer from "./components/Customer";
// import FunComp from "./components/FunComp";

function App() {
  return (
    <div className="container">
      {/* <Customer name="Om" title="developer" age={25} />
      <FunComp name="dhiraj" age={25} /> */}
      {/* <Counter />
      <Youtube /> */}
      {/* <Login /> */}
      <AuthUser />
    </div>
  );
}

export default App;
