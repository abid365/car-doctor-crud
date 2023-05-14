import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import NaviBar from '../Shared/NaviBar';


const Main = () => {
    return (
        <div className='parent'>
            <NaviBar></NaviBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;