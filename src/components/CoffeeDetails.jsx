import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();
  const { photoUrl, _id, coffee, barista, taste, details, supplier } =
    singleCoffee;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={photoUrl}
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-amber-900">{coffee}</h1>
          <h1 className="text-3xl font-bold text-amber-800">Barista: {barista}</h1>
          <h1 className="text-2xl font-bold text-amber-700">Taste: {taste}</h1>
          <h1 className="text-xl font-bold text-amber-600">Supplier: {supplier}</h1>
          </div>
          <p className="py-6">
            {details}
          </p>
          <Link to="/"><button className="btn btn-primary bg-amber-700 hover:bg-amber-900">Go Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
