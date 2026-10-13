import {useMemo, useRef} from 'react';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import useGsap from '../hooks/useGsap';

gsap.registerPlugin(ScrollTrigger);

export function WineGlass(){
 const glass=useRef();
 const glassShape=useMemo(()=>new THREE.LatheGeometry([
  [0,0],[.42,0],[.48,.04],[.42,.08],[.06,.12],[.045,.18],[.055,.2],
  [.075,.22],[.09,.62],[.18,.78],[.31,.98],[.42,1.2],[.46,1.4],
  [.43,1.56],[.35,1.67],[.2,1.72],[.17,1.7],[.32,1.6],[.38,1.43],
  [.36,1.25],[.26,1.05],[.14,.83],[.035,.68],[0,.68]
 ].map(([radius,height])=>new THREE.Vector2(radius,height)),96),[]);
 const wineShape=useMemo(()=>new THREE.LatheGeometry([
  [0,1.17],[.31,1.17],[.29,1.07],[.22,.94],[.12,.82],[0,.78]
 ].map(([radius,height])=>new THREE.Vector2(radius,height)),72),[]);
 useFrame(({clock})=>{
  if(!glass.current)return;
  const time=clock.getElapsedTime();
  glass.current.rotation.y=Math.sin(time*.25)*.13;
  glass.current.position.y=-.16+Math.sin(time*.55)*.045;
 });
 return <group ref={glass} position={[.45,-.16,0]} rotation={[0,0,-.08]} scale={1.05}>
  <mesh geometry={glassShape}>
   <meshPhysicalMaterial color="#f6e7d0" transparent opacity={.22} roughness={.08} metalness={.18} clearcoat={1}/>
  </mesh>
  <mesh geometry={wineShape}>
   <meshPhysicalMaterial color="#8d1029" roughness={.18} metalness={.12} clearcoat={1}/>
  </mesh>
  <mesh position={[0,1.71,0]} rotation={[Math.PI/2,0,0]}>
   <torusGeometry args={[.365,.009,8,96]}/>
   <meshStandardMaterial color="#d5b573" metalness={.82} roughness={.22}/>
  </mesh>
  <mesh position={[0,.08,0]} rotation={[Math.PI/2,0,0]}>
   <torusGeometry args={[.43,.012,8,96]}/>
   <meshStandardMaterial color="#c5a66a" metalness={.8} roughness={.24}/>
  </mesh>
 </group>;
}

export function ScrollWineGlass({sceneRef}){
 const glass=useRef();
 const {viewport}=useThree();
 const motion=useRef({x:viewport.width*.23,y:-.05,scale:1.25,rotation:-.12});
 useFrame(()=>{
  if(!glass.current)return;
  const {x,y,scale,rotation}=motion.current;
  glass.current.position.set(x,y,0);
  glass.current.scale.setScalar(scale);
  glass.current.rotation.z=rotation;
 });
 useGsap(()=>{
  const destination=document.querySelector('.coll .card:first-child .ph');
  if(!destination)return;
  const view=()=>({
   width:2*Math.tan(45*Math.PI/360)*10*window.innerWidth/window.innerHeight,
   height:2*Math.tan(45*Math.PI/360)*10
  });
  const travel=gsap.timeline({scrollTrigger:{
   trigger:'#top',start:'top top',endTrigger:destination,end:'center center',scrub:1,invalidateOnRefresh:true
  }});
  travel.fromTo(motion.current,
   {x:()=>view().width*.23,y:-.05,scale:1.25,rotation:-.12},
   {x:()=>{
    const rect=destination.getBoundingClientRect();
    return ((rect.left+rect.width/2)/window.innerWidth-.5)*view().width-.45;
   },y:()=>{
    const rect=destination.getBoundingClientRect();
    return (.5-(rect.top+rect.height/2)/window.innerHeight)*view().height-.68;
   },scale:.78,rotation:.14,ease:'none'},0);
  gsap.to(sceneRef.current,{autoAlpha:0,ease:'none',scrollTrigger:{
   trigger:destination,start:'center center',endTrigger:'#gallery',end:'top center',scrub:true,invalidateOnRefresh:true
  }});
 });
 return <group ref={glass}><WineGlass/></group>;
}

export default function WineScene({sceneRef}){
 return <div ref={sceneRef} className="scroll-scene" aria-hidden="true">
  <Canvas camera={{position:[0,0,10],fov:45}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}>
  <ambientLight intensity={1.8}/>
  <directionalLight position={[-2,3,4]} intensity={3} color="#fff0d4"/>
  <pointLight position={[1.5,1.8,-1]} intensity={22} color="#a31332"/>
  <ScrollWineGlass sceneRef={sceneRef}/>
  </Canvas>
 </div>;
}
