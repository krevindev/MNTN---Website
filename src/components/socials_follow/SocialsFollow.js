import './SocialsFollow.css';

import igLogo from '../../res/svg/ig-logo.svg';
import twitterLogo from '../../res/svg/twitter-logo.svg';

export default function SocialsFollow() {
    return (
        <div id='social-container'>
            <div className='social-part'><h5>Follow Us</h5></div>
            <div className='social-part'>
                <img src={igLogo} />
            </div>
            <div className='social-part'>
                <img src={twitterLogo} />
            </div>
        </div>
    )
}