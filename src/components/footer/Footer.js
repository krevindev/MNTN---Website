import './Footer.css';

const footerMoreData = [
    {
        title: 'More on The Blog',
        list: ['About MNTN', 'Contributors & Writers', 'Write For Us', 'Contact Us', 'Privacy Policy']
    },
    {
        title: 'More on MNTN',
        list: ['The Team', 'Jobs', 'Press']
    }
]

export default function Footer() {

    return (
        <footer id="footer">
            <div className='footer-part'>
                <div className='upper'>
                    <h1>MNTN</h1>
                    <p>Get out there & discover your next slope, mountain & desitnation!</p>
                </div>
                <div className='lower'>
                    <p> Copyright 2019 MNTN Inc. Terms & Policy</p>
                </div>
            </div>
            {
                footerMoreData.map(moreData => (
                    <div className='footer-part'>
                        <FooterMore title={moreData.title} list={moreData.list} />
                    </div>
                ))
            }
        </footer>
    )
}

function FooterMore({ title, list }) {
    return (
        <div className='footer-more'>
            <h4>{title}</h4>
            {
                list.map(l => <h5>{l}</h5>)
            }
        </div>
    )
}