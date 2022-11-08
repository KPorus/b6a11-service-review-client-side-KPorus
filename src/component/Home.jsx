import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        {/* intro part */}
      <div className='hero  bg-base-200'>
        <div className='hero-content  flex-col lg:flex-row'>
          <img
            src='https://i.ibb.co/xCG2YjJ/pexels-kaique-rocha-598917.jpg'
            className='max-w-sm rounded-lg shadow-2xl' alt="owner"
          />
          <div>
            <h1 className='text-5xl font-bold'>Welcome</h1>
            <p className='py-6 text-xl'>
              Hi I am Fardin khan. I am a photographer. In this website i gave some work of my which is my most favourite.
              Hope you like it. Also in service part i put some services in which i am expert.
            </p>
           <Link to="/login"> <button className='btn btn-[#FFDBC7]'>Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
