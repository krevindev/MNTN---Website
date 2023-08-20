import './Header.css';

export default function Header() {
    return (
        <div id="header">
            <div className='header-part' id='header-logo-container'>
                <h1>MNTN</h1>
            </div>
            <div className='header-part' id='header-nav-container'>
                <ul>
                    <li onClick={() => window.scrollTo({ top: '0px' })}>Home</li>
                    <li>Equipment</li>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='header-part' id='header-account-container'>
                <h5>Account</h5>
            </div>
        </div>
    )
}