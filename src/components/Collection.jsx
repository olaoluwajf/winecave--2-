import {useRef} from 'react';
import {ArrowLeft,ArrowRight} from 'lucide-react';
import {WINES,naira} from '../data/content';
import {useCart} from '../context/CartContext';
import SectionHeading from './SectionHeading';
import InteractiveCard from './InteractiveCard';
import Img from './Img';
export default function Collection({openCart}){
 const s=useRef(),{add}=useCart();
 const go=d=>s.current.scrollBy({left:d*s.current.clientWidth*.6,behavior:'smooth'});
 return(<section id="collection" className="coll"><SectionHeading label="Collection" title="The Collection">
  <div><button aria-label="Previous" onClick={()=>go(-1)} className="ic"><ArrowLeft size={18}/></button><button aria-label="Next" onClick={()=>go(1)} className="ic"><ArrowRight size={18}/></button></div></SectionHeading>
  <p className="demo-note">Indicative prices in naira; availability and prices may vary.</p>
  <div ref={s} className="slider">{WINES.map(w=>(<InteractiveCard key={w.id}>
   <span className="num sm">{w.n}</span><Img photo={w.photo} pos={w.pos} w={900} ratio="3/4" alt={w.name}/>
   <p className="label shift">{w.cat}</p><h3 className="shift">{w.name}</h3><p className="more">{w.note}</p>
   <div className="row"><span>{naira(w.price)}</span><button className="btn sm" data-cursor="" onClick={()=>{add(w.id);openCart();}}>Add to order</button></div></InteractiveCard>))}</div></section>);
}
