'use client';
import { motion } from 'framer-motion';

export default function CinematicBg() {
  return <div className='fixed inset-0 -z-10 overflow-hidden'>
    <div className='absolute inset-0 bg-grid bg-[size:40px_40px] opacity-30' />
    <motion.div className='absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan/20 blur-3xl' animate={{ x:[0,80,0], y:[0,30,0] }} transition={{repeat:Infinity,duration:12}} />
    <motion.div className='absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl' animate={{ x:[0,-70,0], y:[0,-40,0] }} transition={{repeat:Infinity,duration:14}} />
  </div>;
}
