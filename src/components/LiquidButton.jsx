import {useId,useRef} from 'react';
import gsap from 'gsap';
import {ArrowUpRight} from 'lucide-react';
// Slow SVG turbulence displacement on the background only, so the label stays crisp.
export default function LiquidButton({children,href,onClick,light=false,type='button'}){
 const id='liq'+useId().replace(/:/g,''),turb=useRef(),map=useRef(),o=useRef({f:0});
 const to=(f,s)=>{gsap.to(o.current,{f,duration:1.4,ease:'power2.out',onUpdate:()=>turb.current?.setAttribute('baseFrequency',`${o.current.f} ${o.current.f*2}`)});gsap.to(map.current,{attr:{scale:s},duration:1.4,ease:'power2.out'});};
 const Tag=href?'a':'button',props=href?{href}:{type,onClick};
 return(<Tag {...props} className={'btn liquid'+(light?' light':'')} data-cursor="" onMouseEnter={()=>to(.012,16)} onMouseLeave={()=>to(0,0)}>
  <svg width="0" height="0" aria-hidden="true"><filter id={id}><feTurbulence ref={turb} type="fractalNoise" baseFrequency="0 0" numOctaves="1" result="n"/><feDisplacementMap ref={map} in="SourceGraphic" in2="n" scale="0"/></filter></svg>
  <span className="liquid-bg" style={{filter:`url(#${id})`}}/><span className="liquid-label">{children}<ArrowUpRight size={16}/></span></Tag>);
}
