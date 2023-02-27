import { Select } from 'antd';
import React from 'react';
import DrafttextEditor from './draftTextEditor';
import DragNDrop from './DragNDrop';

const Marketing = ({ isOpen, setmarketingOpen }) => {
    const diseasesOptions = [
        { label: "Apple", value: "apple" },
        { label: "iPhone", value: "iphone" },
        { label: "64GB", value: "64gb" }
    ]
    return (
        <div className={`w-[80%] md:w-[490px] fixed top-0 right-0 z-50 h-screen bg-white border-l-[1px] border-l-[#E8E9EB] pl-[30px] pt-[10px] ${isOpen ? "visible" : "hidden"} overflow-y-scroll pb-4 md:pb-0`} >
            <h3 className="text-[18px] md:text-[28px] font-medium mb-6">Add Marketing Material</h3>
            <p className="text-sm font-normal text-[#8A9099] mb-[6px]">Product Name</p>
            <div className="border-[1px] border-[#E8E9EB] rounded-xl w-[90%] md:w-[430px]">
                <p className="text-xs md:text-sm font-normal text-[#8A9099] py-[10px] pl-4">Apple iPhone 11 Pro Max 64GB Midnight Green</p>
            </div>
            <div>
                <p className="text-sm font-normal text-[#3F434A] mb-[6px] mt-[17px]">Description</p>
                {/* <TextEditor /> */}
                <DrafttextEditor />
            </div>
            <div className='w-[90%] md:w-[430px] h-[40px] mb-[17px]'>
                <p className="text-sm font-normal text-[#3F434A] mb-[6px] mt-[17px]">Procedures</p>
                <Select className='selectCustom' options={[{ label: "Phone", value: "phone" }]} defaultValue={{ label: "Phone", value: "phone" }} />
            </div>
            <div className=''>
                <p className="text-sm font-normal text-[#3F434A] mb-[6px] mt-9">Diseases</p>
                <Select mode="multiple" className='selectCustom' options={diseasesOptions} defaultValue={{ label: "Phone", value: "phone" }} />
            </div>
            <div className='mt-[17px]'>
                <p className="text-sm font-normal text-[#3F434A] mb-[6px] ">Devices</p>
                <Select mode="multiple" className='selectCustom' options={diseasesOptions} defaultValue={{ label: "Phone", value: "phone" }} />
            </div>
            <div className='h-[100px] mt-[30px] md:mt-[115px]'>
                <p className="text-sm font-normal text-[#8A9099] mb-[6px] mt-[17px]">Product Images</p>
                <DragNDrop className="dragNDrop" />
                <div className="flex space-x-4 pt-[20px] md:pt-[57px] pb-4 md:pb-0">
                    <button className="text-[15px] font-medium text-white bg-[#304FFD] rounded-xl py-2 px-9">Save</button>
                    <button onClick={() => setmarketingOpen(false)} className="text-[15px] font-medium text-[#595F69] bg-white border-[1px] border-[#E8E9EB] rounded-xl py-2 px-9">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Marketing;