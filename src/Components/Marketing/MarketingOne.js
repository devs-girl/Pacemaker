import { Progress } from 'antd';
import React from 'react';
import MarketingO from '../../img/mr1.png';
import DrafttextEditor from './draftTextEditor';

const MarketingOne = ({ marketingOpen, setmarketingOpen }) => {
    const diseasesOptions = [
        { label: "Apple", value: "apple" },
        { label: "iPhone", value: "iphone" },
        { label: "64GB", value: "64gb" }
    ]
    return (
        <div className={`w-[80%] md:w-[490px] fixed top-0 right-0 z-50 h-screen bg-white border-l-[1px] border-l-[#E8E9EB] pl-[30px] pt-[10px] ${marketingOpen ? "visible" : "hidden"} overflow-y-scroll pb-4 md:pb-0`} >
            <h3 className="text-[18px] md:text-[28px] font-medium mb-6">Marketing Material 1</h3>
            <p className="text-sm font-normal text-[#8A9099] mb-[6px]">Description</p>
            <div>
                <p className="text-sm font-normal text-[#3F434A] mb-[6px] mt-[17px]">Description</p>
                {/* <TextEditor /> */}
                <DrafttextEditor />
            </div>
            <div className='mt-6 mb-[16px]'>
                <img className="w-[90%] md:w-[389px] md:h-[180px]" src={MarketingO} alt="" />
            </div>
            <div className='mr-6 mb-0 md:mb-[60px] lg:mb-[100px]'>
                <div className='flex justify-between items-center px-1'>
                    <p>January</p>
                    <p>613</p>
                </div>
                <Progress strokeWidth={10} showInfo={false} strokeColor={'#8676FF'} className='progr' percent={50} size="small" />
                <div className='flex justify-between items-center px-1'>
                    <p>February</p>
                    <p>613</p>
                </div>
                <Progress strokeWidth={10} showInfo={false} strokeColor={'#FF708B'} className='progr' percent={80} size="small" />
                <div className='flex justify-between items-center px-1'>
                    <p>March</p>
                    <p>613</p>
                </div>
                <Progress strokeWidth={10} showInfo={false} strokeColor={'#FFBA69'} className='progr' percent={70} size="small" />

            </div>

            <div className="flex space-x-4 pt-[20px] md:pt-[57px]">
                <button className="text-[15px] font-medium text-white bg-[#304FFD] rounded-xl py-2 px-9">Save</button>
                <button onClick={() => setmarketingOpen(false)} className="text-[15px] font-medium text-[#595F69] bg-white border-[1px] border-[#E8E9EB] rounded-xl py-2 px-9">Cancel</button>
            </div>
        </div>
    );
};

export default MarketingOne;