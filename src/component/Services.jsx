import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { setLoading } = useContext(AuthContext);
  setLoading(true);
    let services =useLoaderData()
    setLoading(false);
    return (
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-14'>
            {
                services.map(services=><ServiceCard services={services} key={services._id}></ServiceCard>)
            }
        </div>
    );
};

export default Services;