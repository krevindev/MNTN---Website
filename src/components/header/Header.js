import './Header.css';
import useWindowSize from '../../hooks/useWindowSize';

import userIcon from '../../res/svg/user-icon.svg';
import navBtn from '../../res//svg/nav-btn.svg';
import { useEffect, useState } from 'react';

export default function Header() {

    const isMobile = useWindowSize().width <= 500;
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const handleClick = e => {
        const targetID = e.target.id;
        if (targetID == 'mobile-header-nav-btn') {
            setIsMobileNavVisible(prev => !prev);
        } else if (targetID == 'mobile-nav-container') {
            setIsMobileNavVisible(false);
        }
    };

    useEffect(() => {
        if(!isMobile) setIsMobileNavVisible(false);
    }, [isMobile]);

    return (
        <div id="header">
            <div className='header-part' id='header-logo-container'>
                <h1 onClick={() => window.location.assign('/')}>MNTN</h1>
            </div>
            {
                !isMobile ? <>
                    <div className='header-part' id='header-nav-container'>
                        <NavlinkUL />
                    </div>
                    <div className='header-part' id='header-account-container'>
                        <img src={userIcon} />
                        <h5>Account</h5>
                    </div>
                </> :
                    <div className='header-part' id='mobile-header-part'>
                        <img src={navBtn} id='mobile-header-nav-btn' onClick={handleClick} />
                    </div>
            }
            {
                isMobile && isMobileNavVisible && <div id='mobile-nav-container' onClick={handleClick}>
                    <NavlinkUL />
                </div>
            }
        </div>
    )
}

function NavlinkUL() {
    return (
        <ul>
            <li>Equipment</li>
            <li>About Us</li>
            <li>Blog</li>
        </ul>
    )
}