import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import frontHumanImg from './res/svg/idk1.svg';
import mountainImg from './res/svg/idk2.svg';
import skyImg from './res/svg/idk3.svg';
import './App.css';
import Header from './components/header/Header';
import HeroSection from './sections/hero/HeroSection';
import Section2 from './sections/section2/Section2';
import NavIndicator from './components/nav_indicator/NavIndicator';
import SocialsFollow from './components/socials_follow/SocialsFollow';

function App() {

  return (
    <div className="App">
      <Header />

      <Parallax pages={4} style={{ top: 0, left: 0 }} className='animation'>

        <ParallaxLayer offset={0} speed={0}>
          <div
            className='parallax'
            id='sky-parallax'
            style={{ backgroundImage: `url(${skyImg})` }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-.5}>
          <div
            className='parallax'
            id='mountain-parallax'
            style={{ backgroundImage: `url(${mountainImg})` }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.6}>
          <div
            className='parallax'
            id='front-parallax'
            style={{ backgroundImage: `url(${frontHumanImg})` }}
          >
            <div className='cover' />
            <div className='cover' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <HeroSection />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={.1}>
          <Section2 />
        </ParallaxLayer>

      </Parallax>
      <NavIndicator />
      <SocialsFollow/>
    </div>
  );
}

export default App;