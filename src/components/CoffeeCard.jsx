import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const CoffeeCard = ({ item }) => {
    const {coffees, setCoffees} = useContext(AuthContext);
  const { photoUrl, _id, coffee, barista, taste } = item;
  const handleDelete = (id) => {
        fetch(`http://localhost:5000/coffees/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
            setCoffees(remainingCoffees);
            console.log("after delte",data)
            }
        })
  }
  return (
    <div>
      <div className="card card-side bg-amber-100 shadow-sm">
        <figure>
          <img src={photoUrl} alt={coffee} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{coffee}</h2>
          <p className="font-bold text-base">Barista: {barista}</p>
          <p>Taste: {taste}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-amber-700 hover:bg-amber-950">Details</button>
            <button className="btn btn-primary bg-amber-700 hover:bg-amber-950">Edit</button>
            <button className="btn btn-primary bg-amber-700 hover:bg-amber-950" onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
