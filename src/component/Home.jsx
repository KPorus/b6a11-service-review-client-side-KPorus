import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      {/* intro part */}
      <div className='hero'>
        <div className='hero-content  flex-col lg:flex-row'>
          <img
            src='https://i.ibb.co/xCG2YjJ/pexels-kaique-rocha-598917.jpg'
            className='max-w-sm rounded-lg shadow-2xl'
            alt='owner'
          />
          <div>
            <h1 className='text-5xl font-bold'>Welcome</h1>
            <p className='py-6 text-xl'>
              Hi I am Fardin khan. I am a photographer. In this website i gave
              some work of my which is my most favourite. Hope you like it. Also
              in service part i put some services in which i am expert.
            </p>
            <Link to='/login'>
              {" "}
              <button className='btn btn-[#FFDBC7]'>Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      {/* work part */}
      <div className='my-4'>
        <div className='text-center font-semibold'>
          <h1 className='text-4xl'>Work</h1>
          <p className='tex-xl'>Here is some of my work.</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 my-4'>
            <div>
            <img className="w-full"
                src='https://i.ibb.co/mDB7WYs/pexels-soulseeker-1589820.jpg'
                alt='pic-2'
              />
            </div>

            <div>
            <img className="w-full"
                src='https://i.ibb.co/LtKv05q/pexels-fauzan-muzakky-5010780.jpg'
                alt='pic-1'
              />
            </div>

            <div>
            <img className="w-full"
                src='https://i.ibb.co/x5DZRFq/pexels-pixabay-36029.jpg'
                alt='pic-3'
              />
            </div>
            
          
        </div>
        <Link to="/work"><button className="btn btn-[#FFDBC7] ">View More</button></Link>
      </div>
    </div>
  );
};

export default Home;
