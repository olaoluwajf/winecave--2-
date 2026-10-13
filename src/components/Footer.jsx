import {ArrowUpRight} from 'lucide-react';
import LiquidButton from './LiquidButton';

export default function Footer(){
 return(<footer id="contact" className="foot">
  <div className="foot-invite">
   <p className="label">Your table is waiting</p>
   <h2>Make room<br/><em>for the moment.</em></h2>
   <LiquidButton href="https://maps.google.com/?q=250+Ogui+Road,+Enugu" light>Find your way here</LiquidButton>
  </div>
  <div className="foot-details">
   <a href="#top" className="foot-brand">WINE CAVE<span>ENUGU · NIGERIA</span></a>
   <div className="foot-place"><p className="label">Visit the house</p><p>250 Ogui Road<br/>Enugu, Nigeria</p><p>Open daily</p></div>
   <div className="foot-social"><p className="label">Stay in good company</p><a className="ulink" href="https://instagram.com/officialwinecave" target="_blank" rel="noreferrer" data-cursor="">@officialwinecave <ArrowUpRight size={14}/></a></div>
   <p className="foot-copyright">© {new Date().getFullYear()} Wine Cave. All rights reserved.</p>
  </div>
 </footer>);
}
