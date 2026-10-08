import {PHOTOS} from '../data/images';
import SectionHeading from './SectionHeading';
import InteractiveCard from './InteractiveCard';
import Reveal from './Reveal';
import Img from './Img';
export default function Journal(){
 return(<section id="journal" className="journal"><SectionHeading label="Journal" title="Journal"/><div className="jgrid">
  <InteractiveCard className="big" cursor="VIEW"><Reveal><Img photo={PHOTOS.glass} ratio="4/3" w={1400} alt="Featured story"/></Reveal>
   <p className="label">At the table</p><h3 className="shift">A bottle worth slowing down for</h3></InteractiveCard>
  <InteractiveCard cursor="VIEW"><p className="label">From the cellar</p><h4 className="shift">Finding your next favourite red</h4></InteractiveCard>
  <InteractiveCard cursor="VIEW"><p className="label">Good pairings</p><h4 className="shift">A little something for the table</h4></InteractiveCard></div></section>);
}
