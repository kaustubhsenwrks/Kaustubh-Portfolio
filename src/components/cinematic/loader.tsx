'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const lines = ['> booting kaustubhOS...','> initializing neural systems...','> syncing github activity...','> compiling projects...','> loading AI modules...','> welcome back, kaustubh sen'];
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(()=>{const t=setTimeout(()=>setDone(true),2600);return()=>clearTimeout(t);},[]);
  return <AnimatePresence>{!done && <motion.div exit={{opacity:0}} className='fixed inset-0 z-50 bg-black p-8 font-mono text-cyan'>
    <div className='mx-auto mt-24 max-w-2xl space-y-2'>{lines.map((l,i)=><motion.p key={l} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i*0.3}}>{l}</motion.p>)}</div>
  </motion.div>}</AnimatePresence>;
}
