import {useEffect} from 'react';
import gsap from 'gsap';
export const prefersReduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
// Runs a GSAP setup inside a scoped context and reverts it on unmount. Skipped for reduced motion.
export default function useGsap(setup,scope){
 useEffect(()=>{if(prefersReduced())return;const c=gsap.context(setup,scope);return()=>c.revert();},[]);
}
