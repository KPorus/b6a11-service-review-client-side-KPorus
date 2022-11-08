import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutService = () => {
    let services = useLoaderData()
    console.log(services);
    return (
        <div>
            
        </div>
    );
};

export default CheckoutService;