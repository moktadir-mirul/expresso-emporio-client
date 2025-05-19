import React from 'react';
import Navbar from '../components/Navbar';
import App from '../App';
import AllCoffees from '../components/AllCoffees';
import { Outlet, useNavigation } from 'react-router';
import FallbackEle from '../components/FallbackEle';

const Home = () => {
    const {state} = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                state === "loading" ? <FallbackEle /> : <Outlet></Outlet> 
            }         
        </div>
    );
};

export default Home;