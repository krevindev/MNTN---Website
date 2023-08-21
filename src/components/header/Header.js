import './Header.css';

import userIcon from '../../res/svg/user-icon.svg';

export default function Header() {

    return (
        <div id="header">
            <div className='header-part' id='header-logo-container'>
                <h1 onClick={() => window.location.assign('/')}>MNTN</h1>
            </div>
            <div className='header-part' id='header-nav-container'>
                <ul>
                    <li>Equipment</li>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='header-part' id='header-account-container'>
                <img src={userIcon} />
                <h5>Account</h5>
            </div>
        </div>
    )
}