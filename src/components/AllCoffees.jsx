import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import CoffeeCard from './CoffeeCard';

const AllCoffees = () => {
    const {coffees, setCoffees} = useContext(AuthContext)
    useEffect(()=> {
        fetch("http://localhost:5000/coffees")
        .then((res) => res.json())
        .then(data => {
            setCoffees(data);
            console.log(data)
        })
    }, [setCoffees])
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                coffees.map(item => <CoffeeCard key={item._id} item={item}></CoffeeCard>)
            }
        </div>
    );
};

export default AllCoffees;