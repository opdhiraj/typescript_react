import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IUsers } from "../models/IUsers";
import { UsersService } from "../services/UsersService";

interface IParams {
  id: string;
}
interface IState {
  Loading: boolean;
  user: IUsers;
  errorMsg: string;
}

const UserDetail: React.FC = () => {
  // const{id}=useParams()    normal react way

  const { id } = useParams<IParams | any>();

  const [state, setState] = useState<IState>({
    Loading: false,
    user: {} as IUsers,
    errorMsg: "",
  });

  //getting data

  useEffect(() => {
    if (id) {
      setState({ ...state, Loading: true });
      UsersService.getUser(id)
        .then((res) => setState({ ...state, Loading: false, user: res.data }))
        .catch((error) =>
          setState({ ...state, Loading: false, errorMsg: error.message })
        );
    }
  }, [id]);
  //destructing
  const { Loading, user, errorMsg } = state;
  return (
    <>
      <div className="container">
        <h1>Single User Details Page</h1>
        <h4>
          URL params : <span className="font-weight-bold">{id}</span>
        </h4>
        <div className="row">
          {Loading && <h1>Loading....</h1>}
          {errorMsg && <h1>{errorMsg}</h1>}
          {Object.keys(user).length > 0 && (
            <div className="row">
              <ul className="list-group">
                <li className="list-group-item">
                  Name:<b>{user.name}</b>
                </li>
                <li className="list-group-item">
                  Username:<b>{user.username}</b>
                </li>
                <li className="list-group-item">
                  Phone:<b>{user.phone}</b>
                </li>
                <li className="list-group-item">
                  City:<b>{user.address.city}</b>
                </li>
                <li className="list-group-item">
                  Website:<b>{user.website}</b>
                </li>
                <li className="list-group-item">
                  Company:<b>{user.company.name}</b>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mt-4">
          <Link to={"/"} className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
