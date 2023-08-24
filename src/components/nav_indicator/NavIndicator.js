import { useEffect, useState } from 'react';
import './NavIndicator.css';

export default function NavIndicator() {

    const [indiTop, setIndiTop] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const [contentBlocks, setContentBlocks] = useState([]);

    const navIndiData = [
        {
            name: 'Start',
            href: 'hero-section'
        },
        {
            name: '01',
            href: 'content-block1'
        },
        {
            name: '02',
            href: 'content-block2'
        },
        {
            name: '03',
            href: 'content-block3'
        }
    ];

    useEffect(() => {
        const initialContentBlocks = Array.from(document.querySelectorAll('.content-block')).reverse();
        const heroSection = document.querySelector('#hero-section');
        const combinedBlocks = [...initialContentBlocks, heroSection].reverse();

        setContentBlocks(combinedBlocks.reverse());
        console.log(contentBlocks)
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        const handleIntersection = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveIndex(Array.from(contentBlocks).indexOf(entry.target));
                    console.log(Array.from(contentBlocks).indexOf(entry.target));
                    console.log(entry.target.id);
                }
            });
        }
        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        contentBlocks.forEach(cBlock => {
            if (cBlock) {
                observer.observe(cBlock);
            }
        });

        return () => contentBlocks.forEach(block => {
            if (block) {
                observer.unobserve(block);
            }
        })

    }, []);




    const handleClick = (href, index) => {

        const targetSection = document.querySelector(href);
        const parallaxContainer = document.querySelector('.animation');


        try {
            if ("#" + href === 'hero-section') {
                parallaxContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } catch (err) {
            console.log(err)
        }

        // window.location = href;
        setActiveIndex(index + 1);
    };

    useEffect(() => {
        setIndiTop(activeIndex == 0 ? 1 : activeIndex == 1 ? 30 : activeIndex == 2 ? 60 : activeIndex == 3 ? 80 : 0);
    }, [activeIndex]);

    return (
        <div id='nav-indicator'>
            <div id='nav-indi-list-container'>
                <ul>
                    {
                        navIndiData.map((nav, index) => (
                            <li onClick={() => handleClick('#' + nav.href, index)}>{nav.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div id='nav-indi-bar-container'>
                <div id='nav-indi-bar'>
                    <div id='nav-indi-bar-fill'
                        style={{
                            top: indiTop + '%',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}