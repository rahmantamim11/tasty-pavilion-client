import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import MenuItem from './Shared/MenuItem';
import useMenu from './Hooks/useMenu';

const PopularMenu = () => {

     const [menu] = useMenu();
     const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => { 
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)})
    // }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
            subHeading={"Popular Items"}
            heading={"From Our Menu"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
            <button className="mt-3 border-0 border-b-4 btn btn-outline btn-warning">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;