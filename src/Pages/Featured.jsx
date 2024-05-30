import React from 'react';
import featuredImg from '../assets/home/featured.jpg';
import SectionTitle from '../components/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-items bg-fixed text-white pt-8 my-20'>
            <div className='bg-black bg-opacity-30 p-1'>
                <SectionTitle
                    subHeading={"Check it Out"}
                    heading={"Featured Items"}></SectionTitle>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center pb-20 pt-12 px-4 md:px-36 bg-opacity-50 bg-slate-600'>
                <div className='w-full md:w-1/2'>
                    <img src={featuredImg} alt="" className='w-full'/>
                </div>
                <div className='w-full md:w-1/2 md:ml-10 mt-8 md:mt-0 text-center md:text-left'>
                    <p className='mb-3'>23 July 2025</p>
                    <p className='uppercase font-bold mt-3'>Where Can I Get Some?</p>
                    <p className='mt-3'>Discover the pinnacle of culinary delight in our Featured Items, where we showcase the epitome of our chef's expertise. Each dish is a carefully curated masterpiece, offering a symphony of flavors and textures that will tantalize your taste buds. From succulent cuts of prime steak to the freshest seafood creations, these highlighted selections represent the essence of TASTY PAVILION's culinary artistry.</p>
                    <button className="mt-3 border-0 border-b-4 btn btn-outline btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
