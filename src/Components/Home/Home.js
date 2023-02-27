/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Navbar from '../Topbar/Navbar';
import TopBar from '../Topbar/TopBar';
import Products from './Products';

const Home = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    return (
        <div className='md:flex'>
            <div className='fixed w-[76px] h-[970px] pb-[54px] border-r border-[#E8ECEF] hidden md:block'>
                <p className='text-4xl text-[#4D7CFE] font-light tracking-wider py-[19px] px-28px] text-center'>io</p>
                <span className='bg-[#F8FAFB] py-[19px] px-28px] w-[75px] h-[64px] block mb-32 border-l-2  border-[#4D7CFE]'></span>
                <span className='bg-[#F8FAFB] py-[19px] px-28px] w-[75px] h-[64px] block mb-[251px]'></span>
                <span className='bg-[#F8FAFB] py-[19px] px-28px] w-[75px] h-[64px] block'></span>
                {/* color-pallet  */}
                <div>
                    <ul>
                        <li><a href="#" className='text-sm font-normal border-l-2  border-[#4D7CFE] text-[#778CA2] flex justify-center uppercase pb-7'>pr</a></li>
                        <li><a href="#" className='text-sm font-normal border-l-2  border-[#FE4D97] text-[#778CA2] flex justify-center uppercase pb-7'>hm</a></li>
                        <li><a href="#" className='text-sm font-normal border-l-2  border-[#6DD230] text-[#778CA2] flex justify-center uppercase pb-7'>bd</a></li>
                        <li><a href="#" className='text-sm font-normal border-l-2  border-[#2CE5F6] text-[#778CA2] flex justify-center uppercase pb-7'>cc</a></li>
                        <li><a href="#" className='text-sm font-normal border-l-2  border-[#FFAB2B] text-[#778CA2] flex justify-center uppercase pb-7'>pu</a></li>
                        <li><a href="#" className='text-sm font-normal border-l-2  border-[#6DD230] text-[#778CA2] flex justify-center uppercase'>mr</a></li>
                    </ul>
                </div>
            </div>
            <div className='ml-0 md:ml-[76px] md:w-[calc(100%-76px)]'>
                <TopBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                <Products />
            </div>
        </div>
    );
};

export default Home;