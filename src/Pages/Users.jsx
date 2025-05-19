import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from '../components/SingleUser';

const Users = () => {
    const users = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                users.map(user => <SingleUser key={user._id} user={user}></SingleUser>)
            }
        </div>
    );
};

export default Users;