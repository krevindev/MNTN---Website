import ContentBlock from '../../components/content_block/ContentBlock';
import './Section2.css';

import img1 from '../../res/section2-images/img1.svg';
import img2 from '../../res/section2-images/img2.svg';
import img3 from '../../res/section2-images/img3.svg';
import Footer from '../../components/footer/Footer';

export default function Section2() {

    const contentBlocksData = [
        {
            linedText: 'Get Started',
            title: 'What level of a hiker are you?',
            details: "Determining what level of a hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various website like All Trails and Modern Hiker. What type of hiker are you -- novice, moderate, advanced moderate, expert, or expert backpacker?",
            imgSrc: img1
        },
        {
            linedText: 'Hiking Essentials',
            title: 'Picking the right Hiking Gear!',
            details: "Determining what level of a hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various website like All Trails and Modern Hiker. What type of hiker are you -- novice, moderate, advanced moderate, expert, or expert backpacker?",
            imgSrc: img2,
            isFlipped: true
        },
        {
            linedText: 'Where you go is the key',
            title: 'Understand Your Map & Timing',
            details: "Determining what level of a hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various website like All Trails and Modern Hiker. What type of hiker are you -- novice, moderate, advanced moderate, expert, or expert backpacker?",
            imgSrc: img3
        }
    ]

    return (
        <div id='section2'>
            {
                contentBlocksData.map((blockData, index) => (
                    <div className='section2-block-container'>
                        <ContentBlock
                            key={index}
                            id={'content-block' + (index + 1)}
                            number={"0" + (index + 1)}
                            title={blockData.title}
                            linedText={blockData.linedText}
                            imgSrc={blockData.imgSrc}
                            details={blockData.details}
                            isFlipped={blockData.isFlipped}
                        />
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}