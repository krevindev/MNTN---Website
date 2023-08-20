import './LinedText.css';

export default function LinedText({ text }) {
    return (
        <div className="lined-text">
            <div className='lined-text-stroke' />
            <div className='lined-text-text'>
                {text}
            </div>
        </div>
    )
}