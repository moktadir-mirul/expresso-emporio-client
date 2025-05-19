import React from 'react';
import Navbar from '../components/Navbar';
import App from '../App';
import AllCoffees from '../components/AllCoffees';

import FallbackEle from '../components/FallbackEle';
import { Outlet, useNavigation } from 'react-router';

const Home = () => {
    const { state } = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {state === "loading" ? <FallbackEle /> : <Outlet></Outlet>}   
        </div>
    );
};

export default Home;