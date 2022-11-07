import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const images = [
    {id:1,img:"https://i.ibb.co/fx24qwN/sit-up.jpg"},
    {id:2 ,img:"https://i.ibb.co/fx24qwN/sit-up.jpg"},
    {id:3,img:"https://i.ibb.co/fx24qwN/sit-up.jpg"},
]

const Work = () => {
    return (
        <PhotoProvider>
      <div>
        {images.filter(item => (
          <PhotoView key={item.id} src={item.img}>
            <img src={item.img} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
    );
};

export default Work;