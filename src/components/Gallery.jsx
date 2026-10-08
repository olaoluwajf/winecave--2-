import {useRef} from 'react';
import {GALLERY} from '../data/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Img from './Img';
// Pointer-drag horizontal gallery. Touch uses native swipe.
export default function Gallery(){
 const r=useRef(),d=useRef({on:false,x:0,s:0});
 const down=e=>{if(e.pointerType==='touch')return;d.current={on:true,x:e.clientX,s:r.current.scrollLeft};r.current.classList.add('drag');};
 const move=e=>{if(d.current.on)r.current.scrollLeft=d.current.s-(e.clientX-d.current.x);};
 const up=()=>{d.current.on=false;r.current.classList.remove('drag');};
 return(<section id="gallery" className="gallery"><SectionHeading label="Gallery" title="Inside the house"/>
  <div ref={r} className="gtrack" data-cursor="DRAG" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}>
   {GALLERY.map(([p,pos,ratio],i)=>(<Reveal key={i} dir={i%2?'left':'up'} className="gitem"><Img photo={p} pos={pos} ratio={ratio} w={900} alt="Wine Cave gallery"/></Reveal>))}</div></section>);
}
