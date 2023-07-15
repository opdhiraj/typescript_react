import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";

// import AuthUser from "./components/AuthUser";
// import UserList from "./components/UserList";
import Users from "./components/Users";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import UserDetail from "./components/UserDetail";
import Test from "./components/test/Test";
// import Counter from "./components/Counter";
// import Youtube from "./components/Youtube";
// import Customer from "./components/Customer";
// import FunComp from "./components/FunComp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/test"
          element={
            <Test
              middleName=" prakash "
              firstName="OM"
              messageCount={10}
              isLoggedIn={true}
            />
          }
        />
        {/* <Customer name="Om" title="developer" age={25} />
      <FunComp name="dhiraj" age={25} /> */}
        {/* <Counter />
      <Youtube /> */}
        {/* <Login /> */}
        {/* <AuthUser /> */}
        {/* <UserList /> */}
        {/* <Users /> */}
      </Routes>
    </>
  );
}

export default App;
