import {useRef} from 'react';
import gsap from 'gsap';
import useGsap from '../hooks/useGsap';
import {PHOTOS} from '../data/images';
import Img from './Img';
import LiquidButton from './LiquidButton';
export default function Hero(){
 const r=useRef();
 useGsap(()=>{
  gsap.timeline({defaults:{ease:'power3.out'}})
   .from('.hero-img',{clipPath:'inset(100% 0 0 0)',duration:1.6,ease:'power4.inOut'})
   .from('.hero-img img',{scale:1.15,duration:2.6},0)
   .from('.meta',{opacity:0,y:10,duration:1,stagger:.15},'-=1')
   .from('.hl span',{yPercent:110,duration:1.2,stagger:.2},'-=.9')
   .from('.hero-cta',{opacity:0,y:20,duration:1},'-=.6');
 },r);
 return(<section id="top" ref={r} className="hero">
  <Img className="hero-img" photo={PHOTOS.hero} w={2400} alt="Friends raising glasses of red wine"/>
  <p className="label meta hero-label">A private house of wine</p>
  <h1 className="hl"><div><span>Refined taste,</span></div><div><span><em>at any hour.</em></span></div></h1>
  <div className="hero-foot"><p className="meta label">250 Ogui Road, Enugu<br/>Open daily</p>
   <div className="hero-cta"><LiquidButton href="#collection" light>Explore the collection</LiquidButton></div></div>
  <span className="scroll-ind meta" aria-hidden="true">Scroll</span></section>);
}
