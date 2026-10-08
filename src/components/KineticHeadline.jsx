import {useRef} from 'react';
import gsap from 'gsap';
import useGsap from '../hooks/useGsap';
// Words rise in one by one; rows drift horizontally in opposite directions as you scroll.
export default function KineticHeadline(){
 const r=useRef();
 useGsap(()=>{
  gsap.from('.kw',{yPercent:110,duration:1.2,ease:'power3.out',stagger:.14,scrollTrigger:{trigger:r.current,start:'top 75%'}});
  const sc={trigger:r.current,scrub:1,start:'top bottom',end:'bottom top'};
  gsap.to('.k1',{x:'-10vw',ease:'none',scrollTrigger:sc});gsap.to('.k2',{x:'10vw',ease:'none',scrollTrigger:sc});
 },r);
 const row=(w,c)=><div className={'krow '+c}>{w.map(x=><span className="kmask" key={x}><span className="kw">{x}</span></span>)}</div>;
 return(<section ref={r} className="kinetic" aria-label="Made for the moment">{row(['MADE','FOR'],'k1')}{row(['THE','MOMENT'],'k2 outline')}</section>);
}
