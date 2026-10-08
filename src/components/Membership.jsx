import {useAuth} from '../context/AuthContext';
import Reveal from './Reveal';
import LiquidButton from './LiquidButton';
export default function Membership({openAuth}){
 const {user,logout}=useAuth();
 return(<section id="membership" className="member"><Reveal>
  <p className="label">Membership</p><h2>{user?`Welcome, ${user.name.split(' ')[0]}.`:'Enter the house.'}</h2>
  <p>Create an account to save your member details in this browser and make ordering quicker on your next visit.</p>
  {user?<LiquidButton onClick={logout} light>Sign out</LiquidButton>:<LiquidButton onClick={openAuth} light>Member login</LiquidButton>}</Reveal></section>);
}
