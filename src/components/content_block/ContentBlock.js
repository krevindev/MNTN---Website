import './ContentBlock.css';

export default function ContentBlock({id, title, linedText, number, imgSrc, isFlipped }) {


    return (
        <div id={id} className={isFlipped ? 'content-block flipped' : 'content-block'}>

            <div className='block-content'>
                <span className='block-number'>03</span>
                <div className='block-inner-content'>
                    <div className='lined-text-container'>
                        <div className="lined-text">
                            <div className='lined-text-stroke' />
                            <div className='lined-text-text'>
                                {linedText}
                            </div>
                        </div>
                    </div>
                    <div className='block-title-container'>
                        <h1>{title || "What level of a hiker are you?"}</h1>
                    </div>
                    <div className='block-details-container'>
                        <p>
                            Determining what level of a hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various website like All Trails and Modern Hiker. What type of hiker are you -- novice, moderate, advanced moderate, expert, or expert backpacker?
                        </p>
                    </div>
                    <div className='block-readmore-container'>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
            <div className='block-content'>
                <img src={imgSrc} />
            </div>
        </div>
    )
}