import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeService.css"

const HomeServiceCard = ({service}) => {
    let {_id, title, price, quantity, quality, outfit,time} = service;
    return (
        <div className={`border-4 border-[#836B5D] text-center p-[4rem] service`}>
            <h1 className='font-bold text-4xl border-b-2 border-[#836b5da1]'>{title}</h1>
            <h2 className='text-4xl font-light p-2'>${price}</h2>
            <h2 className='text-xl p-2'>{time}</h2>
            <h2 className='text-xl p-2'>{quantity}</h2>
            <h2 className='text-xl p-2'>{outfit}</h2>
            <h2 className='text-xl p-2'>{quality}</h2>
             <Link to={`/homeService/${_id}`}><button className='btn btn-accent'>Continue</button></Link>
        </div>
    );
};

export default HomeServiceCard;