/* eslint-disable jsx-a11y/anchor-is-valid */
import { Select, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineFileText, AiOutlinePlus } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { CgPushDown } from 'react-icons/cg';
import { FiSend } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { MdOutlineWindow } from 'react-icons/md';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import Marketing from '../Marketing/Marketing';
const Navbar = ({ isOpenMenu, setIsOpenMenu }) => {
    const [activeBar, setActiveBar] = useState(1)
    const [marketingopen, setmarketingOpen] = useState(false);
    const ref = useRef(null);

    const clickOutside = (ref) => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setmarketingOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return (e) => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }
    useEffect(() => {
        clickOutside(ref)
    }, [ref]);

    const navItems = [
        {
            id: 1,
            name: "Overview",
            icon: <MdOutlineWindow />,
            selectedIcon: <MdOutlineWindow className='text-blue-500' />
        },
        {
            id: 2,
            name: "Milestones",
            icon: <FiSend />,
            selectedIcon: <FiSend className='text-blue-500' />
        },
        {
            id: 3,
            name: "Panel",
            icon: <AiOutlineFileText />,
            selectedIcon: <AiOutlineFileText className='text-blue-500' />,
        },
        {
            id: 4,
            name: "Questionnaire",
            icon: <FiSend />,
            selectedIcon: <FiSend className='text-blue-500' />
        },
        {
            id: 5,
            name: "Answers",
            icon: <FiSend />,
            selectedIcon: <FiSend className='text-blue-500' />
        },
        {
            id: 6,
            name: "Share",
            icon: <FiSend />,
            selectedIcon: <FiSend className='text-blue-500' />
        },
        {
            id: 7,
            name: "History",
            icon: ""
        },
        {
            id: 8,
            name: "Files",
            icon: ""
        },
        {
            id: 9,
            name: "Calendar",
            icon: ""
        },
        {
            id: 10,
            name: "Deck",
            icon: ""
        },
        {
            id: 11,
            name: "Permissions",
            icon: ""
        },
    ]

    const MenuItem = [
        {
            label: <div className='flex items-center space-x-2'>
                <AiOutlineCheck />
                <Typography.Text>Action</Typography.Text>
            </div>,
            key: '1',
            value: "1st"
        },
        {
            label: <div className='flex items-center space-x-2'>
                <AiOutlineCheck />
                <Typography.Text>Option1</Typography.Text>
            </div>,
            key: '2',
            value: "2nd"
        },
        {
            label: <div className='flex items-center space-x-2'>
                <AiOutlineCheck />
                <Typography.Text>Option2</Typography.Text>
            </div>,
            key: '3',
            value: "3rd"
        },
        {
            label: <div className='flex items-center space-x-2'>
                <AiOutlineCheck />
                <Typography.Text>Option3</Typography.Text>
            </div>,
            key: '4',
            value: "4th"
        },
    ];
    return (
        <div className=''>
            {/* top  */}
            <ul className={`lg:flex justify-start ml-[10px] space-x-8 border-b border-[1]-[#A0A0A0] pb-2 hidden`}>
                {
                    navItems?.map((item, i) =>
                        <li key={i} onClick={() => setActiveBar(item?.id)}><a className={`list`} href="#">{item?.icon ? activeBar === item?.id ? item?.selectedIcon : item?.icon : null} <span className={`${activeBar === item?.id && "text-blue-500"}`}> {item?.name}</span></a></li>
                    )
                }
            </ul>
            {
                isOpenMenu &&
                <div className={`w-[50%] fixed lg:hidden right-0 top-8 bg-gray-100 h-screen rounded-md z-50 ${isOpenMenu && "transition delay-700 duration-700 ease-in-out"}`}>
                    <ul className='mt-4 space-y-4 flex flex-col items-start ml-6'>
                        {
                            navItems?.map((item, i) =>
                                <li key={i} onClick={() => setActiveBar(item?.id)}><a className={`list`} href="#" >{item?.icon ? activeBar === item?.id ? item?.selectedIcon : item?.icon : null} <span className={`${activeBar === item?.id && "text-blue-500"}`}> {item?.name}</span></a></li>
                            )
                        }
                    </ul>
                </div>
            }
            {/* bottom  */}
            <div className='md:flex justify-around lg:justify-between border-b border-[1]-[#A0A0A0]'>
                {/* 1 */}
                <div className='flex justify-center md:justify-start'>
                    <p className='hidden lg:flex items-center text-[#778CA2] text-sm font-normal border-r border-2-[#A0A0A0] pr-[9px] pl-6'> Search for task and etc</p>
                    <ul className='fl space-x-6'>
                        <li className='list ml-[17px]'><a href="#">All</a> <p className='bg-[#E8E9EB] text-[#8A9099] text-[8px] md:text-[10px] leading-[15px] block px-[6px] py-1 rounded-lg ml-[7px]'>283</p></li>
                        <li className='list '><a href="#">Available</a> <p className='bg-[#E8E9EB] text-[#8A9099] text-[8px] md:text-[10px] leading-[15px] block px-[6px] py-1 rounded-lg ml-[7px]'>268</p></li>
                        <li className='list'><a href="#">Disabled</a> <p className='bg-[#E8E9EB] text-[#8A9099] text-[8px] md:text-[10px] leading-[15px] block px-[6px] py-1 rounded-lg ml-[7px]'>15</p></li>
                    </ul>
                </div>
                {/* 2  */}
                <ul className='space-x-2 flex items-center justify-center md:justify-start py-2 mt-3 md:mt-0'>
                    <li className='border-[1px] border-[#E2E2EA] p-[9px] rounded-lg h-[38px] hover:bg-[#304FFD]' onClick={() => setmarketingOpen(true)} ><a href="#"><AiOutlinePlus className='text-[#B8B9BE] hover:text-[#FFFFFF]' /></a></li>
                    <Select className='selectOption' options={MenuItem} defaultValue={MenuItem[0]} />
                    <li className='border-[1px] border-[#E2E2EA] px-[9px] py-[4px] rounded-lg h-[38px]'><a href="#"><SlArrowUp className='text-[#B8B9BE] text-sm' /> <SlArrowDown className='text-[#B8B9BE] text-sm' /> </a></li>
                    <li className='fl border-[1px] border-[#E2E2EA] px-[9px] py-[4px] rounded-lg h-[38px]'><a href="#"><GoSettings className='text-[#B8B9BE] text-sm rotate-90 font-semibold' /> </a></li>
                    <li className='border-[1px] border-[#E2E2EA] p-[9px] rounded-lg h-[38px]'><a href="#"><BiFilterAlt className='text-[#B8B9BE]' /></a></li>
                    <li className='fl border-[1px] border-[#E2E2EA] px-[9px] py-[4px] rounded-lg h-[38px]'><a href="#"><CgPushDown className='text-[#B8B9BE] text-sm font-semibold' /> </a></li>
                </ul>
            </div>
            <div ref={ref}>
                <Marketing isOpen={marketingopen} setmarketingOpen={setmarketingOpen} ref={ref} />
            </div>
        </div>
    );
};

export default Navbar;