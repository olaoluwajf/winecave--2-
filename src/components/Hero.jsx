import {useRef} from 'react';
import gsap from 'gsap';
import useGsap from '../hooks/useGsap';
import LiquidButton from './LiquidButton';
import {PHOTOS,unsplash} from '../data/images';
export default function Hero(){
 const r=useRef();
 useGsap(()=>{
  gsap.timeline({defaults:{ease:'power3.out'}})
   .from('.hero-video',{scale:1.12,duration:2.6,ease:'power4.inOut'},0)
   .from('.meta',{opacity:0,y:10,duration:1,stagger:.15},'-=1')
   .from('.hl span',{yPercent:110,duration:1.2,stagger:.2},'-=.9')
   .from('.hero-cta',{opacity:0,y:20,duration:1},'-=.6');
 },r);
 return(<section id="top" ref={r} className="hero">
  <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={unsplash(PHOTOS.hero,2400)} aria-hidden="true">
   <source src="https://videos.pexels.com/video-files/854038/854038-hd_1920_1080_25fps.mp4" type="video/mp4"/>
  </video>
  <p className="label meta hero-label">A private house of wine</p>
  <h1 className="hl"><div><span>Refined taste,</span></div><div><span><em>at any hour.</em></span></div></h1>
  <div className="hero-foot"><p className="meta label">250 Ogui Road, Enugu<br/>Open daily</p>
   <div className="hero-cta"><LiquidButton href="#collection" light>Explore the collection</LiquidButton></div></div>
  <span className="scroll-ind meta" aria-hidden="true">Scroll</span></section>);
}
