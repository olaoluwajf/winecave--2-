import {createContext,useContext,useEffect,useState} from 'react';
import {WINES} from '../data/content';
const Ctx=createContext();
export const useCart=()=>useContext(Ctx);
export function CartProvider({children}){
 const [items,setItems]=useState(()=>{try{return JSON.parse(localStorage.getItem('wc_cart'))||{}}catch{return{}}});
 useEffect(()=>localStorage.setItem('wc_cart',JSON.stringify(items)),[items]);
 const add=id=>setItems(s=>({...s,[id]:(s[id]||0)+1}));
 const setQty=(id,q)=>setItems(s=>{const n={...s};q<=0?delete n[id]:n[id]=q;return n;});
 const clear=()=>setItems({});
 const lines=Object.entries(items).map(([id,qty])=>({...WINES.find(w=>w.id===id),qty}));
 const count=lines.reduce((a,l)=>a+l.qty,0),total=lines.reduce((a,l)=>a+l.qty*l.price,0);
 return <Ctx.Provider value={{lines,count,total,add,setQty,clear}}>{children}</Ctx.Provider>;
}
