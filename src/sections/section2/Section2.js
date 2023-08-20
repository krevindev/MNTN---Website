import ContentBlock from '../../components/content_block/ContentBlock';
import './Section2.css';

import img1 from '../../res/section2-images/img1.svg';
import img2 from '../../res/section2-images/img2.svg';
import img3 from '../../res/section2-images/img3.svg';

export default function Section2() {
    return (
        <div id='section2'>
            <div className='section2-block-container'>
                <ContentBlock id='content-block1' title='What level of a hiker are you?' linedText='HELLO' imgSrc={img1} />
            </div>
            <div className='section2-block-container'>
                <ContentBlock id='content-block2' linedText='HELLO' imgSrc={img2} isFlipped={true} />
            </div>
            <div className='section2-block-container'>
                <ContentBlock id='content-block3' linedText='HELLO' imgSrc={img3} />
            </div>
        </div>
    )
}