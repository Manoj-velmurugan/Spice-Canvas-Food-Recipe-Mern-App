import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import logo from '/logo.png';
import MobileNav from '../MobileNav';

const Header = () => {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]");
    const menuItems = ["Recipes", "About", "Contact"];

    const onOpen = () => {
        setHideLeft("left-0");
    };
    const onClose = () => {
        setHideLeft("-left-[1000px]");
    };

    return (
        <>
            {/* Desktop Navigation */}
            <div className='max-[900px]:hidden'>
                <DesktopNav menuItems={menuItems} Logo={logo} />
            </div>

            {/* Mobile Navigation */}
            <div className='min-[900px]:hidden'>
                <MobileNav
                    menuItems={menuItems} 
                    Logo={logo} 
                    onClose={onClose} 
                    hideLeft={hideLeft} 
                    onOpen={onOpen} 
                />
            </div>
        </>
    );
};

export default Header;
