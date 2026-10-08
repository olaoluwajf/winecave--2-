import {useState} from 'react';
import {X} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
export default function AuthModal({open,onClose}){
 const {user,signup,login,logout}=useAuth();
 const [mode,setMode]=useState('login'),[err,setErr]=useState(''),[f,setF]=useState({name:'',email:'',pw:''});
 if(!open)return null;
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const submit=async e=>{e.preventDefault();setErr('');
  try{mode==='login'?await login(f.email,f.pw):await signup(f.name,f.email,f.pw);onClose();}catch(x){setErr(x.message);}};
 return(<div className="overlay" onClick={onClose}><aside className="panel-card" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}>
  <button className="ic-btn close" onClick={onClose} aria-label="Close"><X size={20}/></button>
  {user?<><p className="label">Member</p><h3>{user.name}</h3><p>{user.email}</p><button className="btn" onClick={()=>{logout();onClose();}}>Sign out</button></>:
  <form onSubmit={submit}><p className="label">Membership</p><h3>{mode==='login'?'Member login':'Join the house'}</h3>
   {mode==='signup'&&<label>Name<input required value={f.name} onChange={set('name')} autoComplete="name"/></label>}
   <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email"/></label>
   <label>Password<input required type="password" minLength={6} value={f.pw} onChange={set('pw')} autoComplete={mode==='login'?'current-password':'new-password'}/></label>
   {err&&<p className="err" role="alert">{err}</p>}<button className="btn" type="submit">{mode==='login'?'Sign in':'Create account'}</button>
   <button type="button" className="link" onClick={()=>{setMode(mode==='login'?'signup':'login');setErr('');}}>{mode==='login'?'New here? Create an account':'Have an account? Sign in'}</button>
   <p className="demo-note">Local demo: accounts are stored in this browser only.</p></form>}</aside></div>);
}
