import {useEffect,useRef} from 'react';
import gsap from 'gsap';
export default function Cursor(){
 const d=useRef(),t=useRef();
 useEffect(()=>{
  if(matchMedia('(pointer: coarse)').matches)return;
  const x=gsap.quickTo(d.current,'x',{duration:.35}),y=gsap.quickTo(d.current,'y',{duration:.35});
  const move=e=>{x(e.clientX);y(e.clientY);const el=e.target.closest('[data-cursor]'),l=el?.dataset.cursor||'';
   t.current.textContent=l;d.current.classList.toggle('big',!!l);d.current.classList.toggle('grow',!!el&&!l);};
  addEventListener('mousemove',move);return()=>removeEventListener('mousemove',move);
 },[]);
 return <div ref={d} className="cursor" aria-hidden="true"><span ref={t}/></div>;
}
