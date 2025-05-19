import React from 'react';

const FallbackEle = () => {
    return (
        <div className='flex justify-center py-20'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default FallbackEle;