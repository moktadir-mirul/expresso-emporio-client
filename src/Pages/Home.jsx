import React from 'react';
import Navbar from '../components/Navbar';
import App from '../App';
import AllCoffees from '../components/AllCoffees';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <App></App>
            <AllCoffees></AllCoffees>
        </div>
    );
};

export default Home;