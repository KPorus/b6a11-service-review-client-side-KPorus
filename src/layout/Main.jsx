import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Main = () => {
    return (
        <div>
            <Header className=""></Header>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;