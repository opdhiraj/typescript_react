import React, { useState } from "react";
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
interface ISTATE {
  users: IUser[];
}
const UserList: React.FC = () => {
  const [state, setState] = useState<ISTATE>({
    users: UserService.getAllUsers(),
  });
  return (
    <>
      <div className="container">
        <div className="row w-50 mt-4">
          <h1>Looping / Iteration</h1>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {state.users.length > 0 &&
                state.users.map((user) => (
                  <tr key={user.sno}>
                    <td className="bg-light">{user.sno}</td>
                    <td className="bg-primary-subtle">{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
