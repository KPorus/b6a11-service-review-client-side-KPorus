import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    let services = useLoaderData()
    console.log(services);
    return (
        <div className='container mx-auto'>
            
        </div>
    );
};

export default CheckOut;