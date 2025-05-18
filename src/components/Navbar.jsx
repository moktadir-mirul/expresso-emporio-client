import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex py-10 justify-between items-center'>
            <NavLink className="font-bold" to="/">Home</NavLink>
            <NavLink className="font-bold" to={"/addcoffee"}>Add Coffee</NavLink>
            <NavLink className="font-bold" to="/users">Users</NavLink>
            <NavLink className="font-bold" to="/login">Log In</NavLink>
        </div>
    );
};

export default Navbar;