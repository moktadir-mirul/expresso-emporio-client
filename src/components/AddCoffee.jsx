import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const AddCoffee = () => {

    const {coffees, setCoffees} = useContext(AuthContext);

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());
        

        // Adding in the server
        fetch("http://localhost:5000/coffees", {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(coffeeData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                
                coffeeData._id = data.insertedId;
                const newCoffees = [...coffees, coffeeData];
                setCoffees(newCoffees);
            }
        })
    }
  return (
    <div className="w-11/12 mx-auto pt-5 pb-10">
      <h1 className="text-5xl text-amber-800 font-bold text-center pb-10">Add Coffee</h1>
      <form onSubmit={handleAddCoffee}>
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
          required
        />
      </fieldset>
        </div>
      <input type="submit" value="Add Coffee" className="my-5 btn btn-lg w-full bg-amber-200 hover:bg-amber-400 duration-200 text-amber-800 font-bold text-lg" />
      </form>
    </div>
  );
};

export default AddCoffee;
