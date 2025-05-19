import React from 'react';

const SingleUser = ({user}) => {
    const { name, address, email, contact, userPhoto } = user;
    return (
        <div className='border border-amber-800 p-5'>
            <div>
                <img src={userPhoto} alt={name} />
            </div>
            <h1>{name}</h1>
            <h1>{address}</h1>
            <h1>{email}</h1>
            <h1>{contact}</h1>
        </div>
    );
};

export default SingleUser;