import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {prefersReduced} from '../hooks/useGsap';
// Wine-red curtain on first load and on every in-page navigation (#links).
export default function PageTransition(){
 const r=useRef();
 useEffect(()=>{
  if(prefersReduced()){r.current.style.display='none';return;}
  gsap.fromTo(r.current,{yPercent:0},{yPercent:-100,duration:.9,ease:'power3.inOut',delay:.15});
  const click=e=>{
   const a=e.target.closest('a[href^="#"]');if(!a||a.getAttribute('href')==='#')return;
   const target=document.querySelector(a.getAttribute('href'));if(!target)return;e.preventDefault();
   gsap.timeline().set(r.current,{yPercent:100}).to(r.current,{yPercent:0,duration:.5,ease:'power3.in'})
    .add(()=>window.__lenis?window.__lenis.scrollTo(target,{immediate:true}):target.scrollIntoView())
    .to(r.current,{yPercent:-100,duration:.7,ease:'power3.out'},'+=.05');
  };
  document.addEventListener('click',click);return()=>document.removeEventListener('click',click);
 },[]);
 return <div ref={r} className="curtain" aria-hidden="true"/>;
}
