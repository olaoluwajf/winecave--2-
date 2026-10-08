import {useRef} from 'react';
import gsap from 'gsap';
import useGsap from '../hooks/useGsap';
// Mask reveal on scroll. dir: up | left | circle
const FROM={up:'inset(0 0 100% 0)',left:'inset(0 100% 0 0)',circle:'circle(0% at 50% 50%)'};
export default function Reveal({children,dir='up',className=''}){
 const r=useRef();
 useGsap(()=>gsap.from(r.current,{clipPath:FROM[dir],duration:1.1,ease:'power3.out',scrollTrigger:{trigger:r.current,start:'top 85%'}}));
 return <div ref={r} className={className}>{children}</div>;
}
