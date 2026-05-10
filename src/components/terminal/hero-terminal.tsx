'use client';
import { motion } from 'framer-motion';
const roles = ['AI/ML Developer','Backend Engineer','Open Source Contributor','Hackathon Builder','Published Author'];
export default function HeroTerminal(){return <div className='glass p-5 font-mono text-sm text-cyan shadow-glow'>
<p>kaustubh@dev:~$ whoami</p>{roles.map((r,i)=><motion.p key={r} initial={{opacity:0,x:-8}} whileInView={{opacity:1,x:0}} transition={{delay:i*0.1}}>{r}</motion.p>)}<span className='animate-pulse'>▋</span>
</div>}
