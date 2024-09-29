import React from 'react';
import { PiBowlFoodFill } from "react-icons/pi";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const MobileNav = ({ menuItems, Logo, onClose, hideLeft, onOpen }) => {
    // Function to handle the menu item click
    const handleMenuItemClick = () => {
        // Close the mobile navigation after clicking a menu item
        onClose();
    };

    return (
        <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
            <a href="/">
                <img src={Logo} alt="logo" className='logoimg' />
            </a>
            <button onClick={onOpen} className='border border-primary rounded'>
                <PiBowlFoodFill className='w-7 h-7' />
            </button>

            {/* Corrected the interpolation of hideLeft */}
            <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
                <button onClick={onClose} className='absolute right-8 top-32'>
                    <RiCloseCircleLine className='w-7 h-7' />
                </button>

                <div>
                    <ul className='flex flex-col gap-5'>
                        {
                            menuItems?.map((menu, index) => (
                                <li key={index} className="mb-5">
                                    <Link to={menu} onClick={handleMenuItemClick} className='font-medium capitalize text-secondary text-2xl'>{menu}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className='flex items-center gap-4 font-medium mt-10'>
                        <li>
                            <button className='text-secondary px-4 py-2 rounded border'>Log In</button>
                        </li>
                        <li>
                            <button className='text-secondary px-4 py-2 rounded border'>Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
