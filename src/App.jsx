import {lazy, Suspense, useRef, useState} from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import {AuthProvider} from './context/AuthContext';
import {CartProvider} from './context/CartContext';
import PageTransition from './components/PageTransition';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import KineticHeadline from './components/KineticHeadline';
import Collection from './components/Collection';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CartDrawer from './components/CartDrawer';
const WineScene=lazy(()=>import('./components/WineScene'));
export default function App(){
 useSmoothScroll();
 const wineScene=useRef(null);
 const [cart,setCart]=useState(false),[auth,setAuth]=useState(false);
 const openCart=()=>setCart(true),openAuth=()=>setAuth(true);
 return(<AuthProvider><CartProvider><PageTransition/><Cursor/><Navbar openCart={openCart} openAuth={openAuth}/>
  <Suspense fallback={null}><WineScene sceneRef={wineScene}/></Suspense>
  <main><Hero/><StorySection/><KineticHeadline/><Collection openCart={openCart}/><Gallery/><Membership openAuth={openAuth}/></main>
  <Footer/><AuthModal open={auth} onClose={()=>setAuth(false)}/><CartDrawer open={cart} onClose={()=>setCart(false)}/></CartProvider></AuthProvider>);
}
