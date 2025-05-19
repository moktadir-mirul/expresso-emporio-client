import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
  const { googleProviderAuth } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleProviderAuth()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex justify-center py-10">
      <fieldset className="fieldset bg-amber-50 border-base-300 rounded-box w-xs border p-4">
        <h1 className="text-4xl text-center py-5 font-bold">Log In</h1>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
        <h1 className="py-5 text-xl font-medium">
          Don't Have an Account? <br />{" "}
          <Link to={"/signup"} className="underline text-blue-800">
            Sign Up
          </Link>
        </h1>
        <button
          className="btn bg-white text-black border-[#e5e5e5] my-5"
          onClick={handleGoogleLogin}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
