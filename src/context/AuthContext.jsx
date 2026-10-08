import {createContext,useContext,useState} from 'react';
// LOCAL DEMO AUTH: accounts live in this browser's localStorage only. Replace with a real backend before launch.
const USERS='wc_users',SESSION='wc_session';
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const Ctx=createContext();
export const useAuth=()=>useContext(Ctx);
export function AuthProvider({children}){
 const [user,setUser]=useState(()=>read(SESSION,null));
 const start=u=>{const s={name:u.name,email:u.email};localStorage.setItem(SESSION,JSON.stringify(s));setUser(s);};
 const signup=async(name,email,pw)=>{
  const users=read(USERS,{});email=email.trim().toLowerCase();
  if(users[email])throw new Error('An account with this email already exists.');
  users[email]={name,email,hash:await sha(pw)};localStorage.setItem(USERS,JSON.stringify(users));start(users[email]);};
 const login=async(email,pw)=>{
  const u=read(USERS,{})[email.trim().toLowerCase()];
  if(!u||u.hash!==await sha(pw))throw new Error('Email or password is incorrect.');start(u);};
 const logout=()=>{localStorage.removeItem(SESSION);setUser(null);};
 return <Ctx.Provider value={{user,signup,login,logout}}>{children}</Ctx.Provider>;
}
