import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";
const HomeService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-k-porus.vercel.app/homeServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <div className='text-center my-14'>
        <h1 className='text-4xl font-bold border-b-2 border-[#836b5da1]'>
          Service
        </h1>
      </div>
      <div className='my-7'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-3 '>
          {services.map((service) => (
            <HomeServiceCard service={service} key={service}></HomeServiceCard>
          ))}
        </div>
        <Link to='/services' className='flex justify-around'>
          <button className='btn btn-[#FFDBC7] '>Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
