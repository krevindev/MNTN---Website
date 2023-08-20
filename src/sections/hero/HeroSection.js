import LinedText from '../../components/lined_text/LinedText';
import './HeroSection.css';

import downArrowImg from '../../res/svg/down-arrow.svg';
import { useEffect, useState } from 'react';



export default function HeroSection() {

    const [section2, setSection2] = useState(document.querySelector('#section2'));

    useEffect(() => {
        setSection2(document.querySelector('#section2'))
    }, [document.querySelector('#section2')]);

    const handleClick = () => {
        section2.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    return (
        <div id="hero-section">
            <div id='hero-main-content'>
                <LinedText text={'a hiking guide'} />
                <h1>Be Prepared For The Mountains And Beyond!</h1>
                {
                    section2 && <span onClick={handleClick}>Scroll Down <img src={downArrowImg} /></span>
                }
            </div>
        </div>
    )
}