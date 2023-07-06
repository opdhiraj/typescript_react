import { IUser } from "../models/IUser";
//service to handle data
export class UserService {
  // private variable
  private static users: IUser[] = [
    { sno: 1, name: "om", age: 25 },
    { sno: 2, name: "prakash", age: 26 },
    { sno: 3, name: "dhiraj", age: 28 },
  ];

  // method to get private users

  public static getAllUsers() {
    return this.users;
  }
}
