import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContext";

const UpdateCoffee = () => {
  const upCoffee = useLoaderData();
  const {coffees, setCoffees} = useContext(AuthContext)
  const { photoUrl, _id, coffee, barista, taste, details, supplier } = upCoffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffeeData = Object.fromEntries(formData.entries());

    // Update Data
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Coffee update has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        const updatedCoffeeList = coffees.map(coffee => {
            if(coffee._id === _id) {
                return {_id, ...updatedCoffeeData}
            }
            return coffee
        });
        setCoffees(updatedCoffeeList)
      });
  };
  return (
    <div className="w-11/12 mx-auto pt-5 pb-10">
      <h1 className="text-5xl text-amber-800 font-bold text-center pb-10">
        Update Coffee
      </h1>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-2xl text-amber-800">
              Coffee Name
            </label>
            <input
              type="text"
              className="input w-full focus:text-amber-800 text-amber-600"
              placeholder="Enter Coffee Name"
              name="coffee"
              defaultValue={coffee}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-2xl text-amber-800">
              Barista Name
            </label>
            <input
              type="text"
              className="input w-full focus:text-amber-800 text-amber-600"
              placeholder="Enter Barista Name"
              name="barista"
              defaultValue={barista}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-2xl text-amber-800">
              Supplier
            </label>
            <input
              type="text"
              className="input w-full focus:text-amber-800 text-amber-600"
              placeholder="Supplier Name"
              name="supplier"
              defaultValue={supplier}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-2xl text-amber-800">
              Details
            </label>
            <input
              type="text"
              className="input w-full focus:text-amber-800 text-amber-600"
              placeholder="Details"
              name="details"
              defaultValue={details}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-2xl text-amber-800">
              Taste
            </label>
            <input
              type="text"
              className="input w-full focus:text-amber-800 text-amber-600"
              placeholder="Enter Taste Type"
              name="taste"
              defaultValue={taste}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-full border p-4">
            <label className="label font-bold text-2xl text-amber-800">
              Photo URL
            </label>
            <input
              type="text"
              className="input w-full focus:text-amber-800 text-amber-600"
              placeholder="Enter photo url"
              name="photoUrl"
              defaultValue={photoUrl}
              required
            />
          </fieldset>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="my-5 btn btn-lg w-full bg-amber-200 hover:bg-amber-400 duration-200 text-amber-800 font-bold text-lg"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
