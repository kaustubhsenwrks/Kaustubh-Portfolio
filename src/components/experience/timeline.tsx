'use client';
import { motion } from 'framer-motion';
import { achievements } from '@/data/portfolio';

export default function Timeline(){return <section id='achievements' className='section'><h2 className='mb-8 text-3xl font-semibold'>Certifications & Achievements</h2><div className='relative border-l border-cyan/40 pl-6'>{achievements.map((item,idx)=><motion.div key={item} whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-20}} className='mb-8'><div className='absolute -left-1.5 mt-2 h-3 w-3 rounded-full bg-cyan shadow-glow'/><h3 className='text-lg'>{item}</h3><p className='text-white/60'>Milestone {idx+1}</p></motion.div>)}</div></section>}
