import {useEffect,useRef} from 'react';
import {ShoppingBag,User} from 'lucide-react';
import {NAV} from '../data/content';
import {useAuth} from '../context/AuthContext';
import {useCart} from '../context/CartContext';
export default function Navbar({openCart,openAuth}){
 const {user}=useAuth(),{count}=useCart();
 const nav=useRef();
 useEffect(()=>{
  let frame;
  const updateTone=()=>{
   frame=undefined;
   const sampleY=nav.current.getBoundingClientRect().height/2;
   const sections=document.querySelectorAll('main > section, footer');
   const section=Array.from(sections).find(el=>{
    const rect=el.getBoundingClientRect();
    return rect.top<=sampleY&&rect.bottom>sampleY;
   });
   nav.current.dataset.tone=section?.matches('.kinetic, .coll, .gallery, .journal')?'light':'dark';
  };
  const scheduleUpdate=()=>{
   if(frame===undefined)frame=requestAnimationFrame(updateTone);
  };
  updateTone();
  window.addEventListener('scroll',scheduleUpdate,{passive:true});
  window.addEventListener('resize',scheduleUpdate);
  return()=>{
   window.removeEventListener('scroll',scheduleUpdate);
   window.removeEventListener('resize',scheduleUpdate);
   if(frame!==undefined)cancelAnimationFrame(frame);
  };
 },[]);
 return(<header ref={nav} className="nav"><a href="#top" className="logo" data-cursor="">WINE CAVE</a>
  <nav>{NAV.slice(0,5).map(([l,id])=><a key={id} href={'#'+id} className="ulink hide-m">{l}</a>)}
   <button className="ic-btn" onClick={openAuth} aria-label="Member account" data-cursor=""><User size={18}/>{user&&<span className="hide-m">{user.name.split(' ')[0]}</span>}</button>
   <button className="ic-btn" onClick={openCart} aria-label="Open order" data-cursor=""><ShoppingBag size={18}/><span>{count}</span></button></nav></header>);
}
