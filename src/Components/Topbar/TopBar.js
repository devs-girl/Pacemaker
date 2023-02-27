import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const TopBar = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <div className='flj pb-3 lg:pb-9 pt-2 px-[6px]'>
            <div>
                <h1 className='text-xl font-semibold mb-1'>Pacemaker</h1>
                <p className='text-sm font-normal leading-4 text-[#0F6FDC]'>Medical Device</p>
            </div>
            <div className='hidden lg:flex items-center mr-[150px]'>
                <p className='text-[#778CA2] text-sm font-normal'>Search for task and etc.</p>
                <span className=' block rounded-full border-2 border-[#FE4D97] h-1 ml-20'></span>
            </div>
            <div className='block lg:hidden mr-4 mt-2'>
                {
                    !isOpenMenu ?
                        <AiOutlineMenu className='visible lg:hidden' onClick={() => setIsOpenMenu(!isOpenMenu)} /> :
                        <AiOutlineClose className='visible lg:hidden' onClick={() => setIsOpenMenu(!isOpenMenu)} />

                }
            </div>
        </div>
    );
};

export default TopBar;