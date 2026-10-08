import {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {prefersReduced} from './useGsap';
gsap.registerPlugin(ScrollTrigger);
export default function useSmoothScroll(){
 useEffect(()=>{
  if(prefersReduced())return;
  const lenis=new Lenis({lerp:.09});window.__lenis=lenis;
  lenis.on('scroll',ScrollTrigger.update);
  const tick=t=>lenis.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
  return()=>{gsap.ticker.remove(tick);lenis.destroy();delete window.__lenis;};
 },[]);
}
