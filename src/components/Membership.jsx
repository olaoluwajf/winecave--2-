import {useAuth} from '../context/AuthContext';
import Reveal from './Reveal';
import LiquidButton from './LiquidButton';
import {PHOTOS,unsplash} from '../data/images';
export default function Membership({openAuth}){
 const {user,logout}=useAuth();
 return(<section id="membership" className="member">
  <video className="member-video" autoPlay muted loop playsInline preload="metadata" poster={unsplash(PHOTOS.moody,1800)} aria-hidden="true">
   <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4"/>
  </video>
  <Reveal className="member-copy">
  <p className="label">Membership</p><h2>{user?`Welcome, ${user.name.split(' ')[0]}.`:'Enter the house.'}</h2>
  <p>Create an account to save your member details in this browser and make ordering quicker on your next visit.</p>
  {user?<LiquidButton onClick={logout} light>Sign out</LiquidButton>:<LiquidButton onClick={openAuth} light>Member login</LiquidButton>}</Reveal></section>);
}
