import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IUsers } from "../models/IUsers";
import { UsersService } from "../services/UsersService";

interface ISTATE {
  Loading: boolean;
  users: IUsers[];
  errorMsg: string;
}

const Users: React.FC = () => {
  const [state, setState] = useState<ISTATE>({
    Loading: false,
    users: [] as IUsers[],
    errorMsg: "",
  });

  //network request
  useEffect(() => {
    setState({ ...state, Loading: true });
    UsersService.getAllUsers()
      .then((res) => {
        console.log(res.data);
        setState({ ...state, Loading: false, users: res.data });
      })
      .catch((err) =>
        setState({ ...state, Loading: false, errorMsg: err.message })
      );
    //eslint-disable-next-line
  }, []);
  const { Loading, users, errorMsg } = state;
  return (
    <>
      <div className="container">
        <h1>Data from Api</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {Loading && <h1>LOading.....</h1>}

        <table className="table table-dark">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <Link
                      to={`users/${user.id}`}
                      className="text-decoration-none"
                    >
                      {user.name}
                    </Link>
                  </td>

                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
