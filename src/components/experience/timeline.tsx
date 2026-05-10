'use client';
import { motion } from 'framer-motion';
const items=['Open Source Contributor','AI/ML Intern','Hackathon Achievements','Author Journey'];
export default function Timeline(){return <section className='section'><h2 className='mb-8 text-3xl font-semibold'>Experience Timeline</h2><div className='relative border-l border-cyan/40 pl-6'>{items.map((i,idx)=><motion.div key={i} whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-20}} className='mb-8'><div className='absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-cyan shadow-glow'/><h3 className='text-xl'>{i}</h3><p className='text-white/60'>Milestone {idx+1} in KaustubhOS career progression.</p></motion.div>)}</div></section>}
