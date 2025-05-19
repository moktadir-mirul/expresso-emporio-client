import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import CoffeeCard from './CoffeeCard';

const AllCoffees = () => {
    const {coffees, setCoffees} = useContext(AuthContext)
    useEffect(()=> {
        fetch("https://expresso-server-iode0jbg1-mirul-mokradir-khans-projects.vercel.app/coffees")
        .then((res) => res.json())
        .then(data => {
            setCoffees(data);
           
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