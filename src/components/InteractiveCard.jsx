import {useRef} from 'react';
import gsap from 'gsap';
import {prefersReduced} from '../hooks/useGsap';
// Children with .ph and .shift elements move slightly with the pointer.
export default function InteractiveCard({children,className='',cursor='EXPLORE'}){
 const r=useRef();
 const move=e=>{if(prefersReduced())return;const b=r.current.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
  gsap.to(r.current.querySelectorAll('.ph'),{x:x*18,y:y*18,duration:.6});gsap.to(r.current.querySelectorAll('.shift'),{x:x*-8,duration:.6});};
 const leave=()=>gsap.to(r.current.querySelectorAll('.ph,.shift'),{x:0,y:0,duration:.8});
 return <article ref={r} className={'card '+className} onMouseMove={move} onMouseLeave={leave} data-cursor={cursor}>{children}</article>;
}
