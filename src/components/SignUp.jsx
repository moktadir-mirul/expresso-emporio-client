import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex justify-center py-10">
      <form className="fieldset bg-blue-100 border-base-300 rounded-box w-xs border p-4">
        <h1 className="text-4xl text-center py-5 font-bold">Sign Up</h1>
        <label className="label">Name</label>
        <input type="text" name="name" className="input" placeholder="Name" />

        <label className="label">Photo URL</label>
        <input
          type="text"
          name="userPhoto"
          className="input"
          placeholder="photo url"
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          name="email"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Sign Up</button>
        <h1 className="py-5 text-xl font-medium">
          Already Have an Account? <br />{" "}
          <Link to={"/login"} className="underline text-blue-800">
            Log In
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default SignUp;
