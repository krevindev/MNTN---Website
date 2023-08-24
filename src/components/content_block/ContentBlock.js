import './ContentBlock.css';

import arrowImg from '../../res/svg/down-arrow.svg';

export default function ContentBlock({key, id, title, linedText, number, imgSrc, isFlipped, details }) {


    return (
        <div key={key} id={id} className={isFlipped ? 'content-block flipped' : 'content-block'}>

            <div className='block-content'>
                <span className='block-number'>{number}</span>
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
                        <p>{details}</p>
                    </div>
                    <div className='block-readmore-container'>
                        <span>read more <img src={arrowImg} loading='lazy' /></span>
                    </div>
                </div>
            </div>
            <div className='block-content'>
                <img src={imgSrc}/>
            </div>
        </div>
    )
}