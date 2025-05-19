import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpWithEmail } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    
    const { address, contact, email, name, password, userPhoto } = newUser;
    const userDbData = { name, address, email, contact, userPhoto };
    
    signUpWithEmail(email, password)
      .then(() => {
        
        fetch("https://expresso-server-iode0jbg1-mirul-mokradir-khans-projects.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userDbData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              
              Swal.fire({
                title: "User created successfully!",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch(() => {});
  };

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSignUp}
        className="fieldset bg-blue-100 border-base-300 rounded-box w-xs border p-4"
      >
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

        <label className="label">Address</label>
        <input
          type="text"
          name="address"
          className="input"
          placeholder="Address"
        />

        <label className="label">Contact No</label>
        <input
          type="text"
          name="contact"
          className="input"
          placeholder="Contact Number"
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

        <input
          type="submit"
          className="btn btn-neutral mt-4"
          value="Sign Up"
        ></input>
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
