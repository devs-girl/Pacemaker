import React, { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import Marketing from '../../img/image 1.png';
import MarketingOne from '../Marketing/MarketingOne';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);
    const [marketingopen, setmarketingOpen] = useState(false);
    useEffect(() => {

        fetch('./info.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // useEffect(() => {
    //     if (selected?.includes(999))
    //         setmarketingOpen(true)
    //     else setmarketingOpen(false)
    // }, [selected])

    const removeOrAdd = (product) => {
        if (!selected?.includes(product?.id)) {
            setSelected([product?.id])
            setmarketingOpen(true)
        }
        else {
            const newProducts = selected.filter(id => id !== product?.id)
            setSelected(newProducts)
            setmarketingOpen(false)
        }
    }

    return (
        <div className=' pt-[17px] md:pl-3'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 lg:px-0'>
                    <div className="lg:row-span-2">
                        <div className={`border border-[1]  ${!selected?.includes(999) ? "border-[#E8E9EB]" : "border-[#304FFD]"} rounded-xl`} onClick={() => { removeOrAdd({ id: 999 }); }}>
                            <div className='px-4 fl pt-[21px]'>
                                <p className={`"text-[#20A144] bg-[#F1FBF4]" } py-[5px] px-[12px] text-xs font-normal rounded-md first-letter:`}>Available</p>
                                {
                                    selected?.includes(999) ?
                                        <BsCheck2Circle className='text-blue-400' /> :
                                        <span className='border-[1px] border-[#E8E9EB] bg-[#F8F8F8] w-4 h-4 rounded-full block'></span>
                                }
                            </div>
                            <div className='px-12 pt-7'>
                                <img className='list-img' src={products[0]?.img} alt="" />
                            </div>

                            <div className="pt-3 border-t border-[1]-[#A0A0A0]">
                                <p className="text-sm font-normal text-[#3F434A] text-center pt-1 pb-2 border-b border-[1]-[#A0A0A0]">Marketing Campaign </p>
                                <img className="w-[171px] h-[83px] pl-3" src={Marketing} alt="" />
                            </div>
                        </div>
                    </div>
                    {
                        products.map(product => {

                            return <div className={`border border-[1] ${!selected?.includes(product?.id) ? "border-[#E8E9EB]" : "border-[#304FFD]"} rounded-xl`} onClick={() => removeOrAdd(product)}>
                                <div className='px-4 fl pt-[21px]'>
                                    <p className={`${product?.type === "Available" ? "text-[#20A144] bg-[#F1FBF4]" : "text-[#E56E19] bg-[#FFF7F2]"} py-[5px] px-[12px] text-xs font-normal rounded-md first-letter:`}>{product.type}</p>
                                    {
                                        selected?.includes(product?.id) ?
                                            <BsCheck2Circle className='text-blue-400' /> :
                                            <span className='border-[1px] border-[#E8E9EB] bg-[#F8F8F8] w-4 h-4 rounded-full block'></span>
                                    }
                                </div>
                                <div className='px-12 pt-7'>
                                    <img className='list-img' src={product.img} alt="" />
                                </div>

                                <div className="px-4 pt-3 border-t border-[1]-[#A0A0A0] ">
                                    <h2><span className='text-sm font-normal leading-[21px] text-[#3F434A]'></span>{product.title}</h2>
                                    <div className='fl mt-[10px] mb-3'>
                                        <p className='text-[#8A9099] text-sm font-normal leading-[21px]'>{product.date}</p>
                                        <p className='text-[#8A9099] text-sm font-normal leading-[21px]'>{product.name}</p>
                                        <p className='text-[#8A9099] text-sm font-normal leading-[21px]'>{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        )
                    }
                </div>
            </div>
            <MarketingOne marketingOpen={marketingopen} setmarketingOpen={setmarketingOpen} />
        </div>
    );
};

export default Products;