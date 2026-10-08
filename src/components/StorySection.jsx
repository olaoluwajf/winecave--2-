import {useEffect,useRef} from 'react';
import gsap from 'gsap';
import {STORY} from '../data/content';
import {prefersReduced} from '../hooks/useGsap';
import Img from './Img';
// Desktop: pinned, vertical scroll drives horizontal movement. Mobile: native swipe (CSS).
export default function StorySection(){
 const r=useRef(),track=useRef();
 useEffect(()=>{
  if(prefersReduced())return;const mm=gsap.matchMedia();
  mm.add('(min-width: 900px)',()=>{const w=track.current.scrollWidth-innerWidth;
   gsap.to(track.current,{x:-w,ease:'none',scrollTrigger:{trigger:r.current,pin:true,scrub:1,end:()=>'+='+w}});});
  return()=>mm.revert();
 },[]);
 return(<section id="story" ref={r} className="story"><div ref={track} className="track">
  {STORY.map(s=>(<article className="panel" key={s.n}><span className="num">{s.n}</span>
   <div className="pcopy"><p className="label">Wine Cave</p><h2>{s.title}</h2><p>{s.copy}</p></div>
   <Img className="pimg" photo={s.photo} pos={s.pos} w={1400} alt={s.title}/></article>))}</div></section>);
}
