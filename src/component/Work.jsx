import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';


const Work = () => {
  let images = useLoaderData();
  return (
    <div className='container mx-auto px-4 py-4'>
      <div>
        <h1 className='font-bold text-3xl text-center my-2'>Here is Some of my Work</h1>
        <p className='font-bold text-xl text-center my-4'>
          Hi here the some work from which i got important lesson in my life. Hope you like it.
        </p>
      </div>
      <PhotoProvider>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {images.map(item => (
            <PhotoView key={item._id} src={item.img}>
              <img src={item.img} alt="" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Work;