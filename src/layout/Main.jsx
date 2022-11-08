import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';

const Main = () => {
    return (
        <div>
            <Header className=""></Header>
            <Outlet className = "container mx-auto"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;