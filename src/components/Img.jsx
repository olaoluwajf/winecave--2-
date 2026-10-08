import {unsplash} from '../data/images';
export default function Img({photo,w=1600,pos='50% 50%',alt='',className='',ratio}){
 return(<div className={'ph '+className} style={ratio?{aspectRatio:ratio}:undefined}>
  <img src={unsplash(photo,w)} alt={alt} loading="lazy" decoding="async" style={{objectPosition:pos}} onError={e=>e.currentTarget.remove()}/></div>);
}
