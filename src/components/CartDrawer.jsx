import {useState} from 'react';
import {X} from 'lucide-react';
import {naira} from '../data/content';
import {useCart} from '../context/CartContext';
import {useAuth} from '../context/AuthContext';
export default function CartDrawer({open,onClose}){
 const {lines,total,setQty,clear}=useCart(),{user}=useAuth();
 const [f,setF]=useState({name:'',phone:'',address:''}),[ref,setRef]=useState('');
 if(!open)return null;
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const pay=e=>{e.preventDefault();setRef('WC-'+Math.random().toString(36).slice(2,8).toUpperCase());clear();};
 return(<div className="overlay right" onClick={onClose}><aside className="panel-card drawer" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}>
  <button className="ic-btn close" onClick={onClose} aria-label="Close"><X size={20}/></button><p className="label">Your order</p>
  {ref?<><h3>Thank you.</h3><p>Demo order {ref} placed. No payment was taken.</p></>:!lines.length?<p>Your order is empty.</p>:<>
   <ul className="lines">{lines.map(l=>(<li key={l.id}><div><strong>{l.name}</strong><br/><small>{naira(l.price)}</small></div>
    <div className="qty"><button aria-label="Less" onClick={()=>setQty(l.id,l.qty-1)}>-</button>{l.qty}<button aria-label="More" onClick={()=>setQty(l.id,l.qty+1)}>+</button></div></li>))}</ul>
   <p className="total"><span>Total</span><span>{naira(total)}</span></p>
   <form onSubmit={pay}><label>Name<input required value={f.name||user?.name||''} onChange={set('name')}/></label>
    <label>Phone<input required type="tel" value={f.phone} onChange={set('phone')}/></label>
    <label>Delivery address<input required value={f.address} onChange={set('address')}/></label>
    <button className="btn" type="submit">Pay {naira(total)} (demo)</button><p className="demo-note">Demo checkout. No payment is taken.</p></form></>}</aside></div>);
}
