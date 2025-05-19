import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const { userInfo, signOutHandler } = useContext(AuthContext);
  console.log(userInfo);

  const handleSignOut = () => {
    signOutHandler()
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  }

  return (
    <div className="w-11/12 mx-auto flex py-5 justify-between items-center">
      <NavLink className="font-bold" to="/">
        Home
      </NavLink>
      <NavLink className="font-bold" to={"/addcoffee"}>
        Add Coffee
      </NavLink>
      <NavLink className="font-bold" to="/users">
        Users
      </NavLink>

      {userInfo ? (
        <div>
          <div className="flex justify-center">
            <img className="w-14 h-14 rounded-full ring-2 ring-blue-600" src={userInfo.photoURL} alt="" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <h1>{userInfo.displayName}</h1>
          <button className="btn btn-lg" onClick={handleSignOut}>Log Out</button>
          </div>
        </div>
      ) : (
        <NavLink className="font-bold" to="/login">
          Log In
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
