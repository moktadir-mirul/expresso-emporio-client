import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, Links } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ item }) => {
  const { coffees, setCoffees } = useContext(AuthContext);
  const { photoUrl, _id, coffee, barista, taste } = item;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://expresso-server-iode0jbg1-mirul-mokradir-khans-projects.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
              
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            <Link to={`/coffeedetails/${_id}`}>
              <button className="btn btn-primary bg-amber-700 hover:bg-amber-950">
                Details
              </button>
            </Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn btn-primary bg-amber-700 hover:bg-amber-950">
                Edit
              </button>
            </Link>
            <button
              className="btn btn-primary bg-amber-700 hover:bg-amber-950"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
