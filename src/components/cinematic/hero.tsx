'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroTerminal from '../terminal/hero-terminal';

export default function Hero(){return <section className='section grid items-center gap-10 lg:grid-cols-2'>
<div className='space-y-6'><HeroTerminal/><h1 className='text-4xl font-bold lg:text-6xl'>Building intelligent systems that merge AI with real-world execution.</h1><p className='text-white/70'>AI/ML engineer with hacker instinct and founder-level execution across automation, data systems, and production tooling.</p><div className='flex gap-3'><a href='#projects' className='glass px-4 py-2'>View Projects</a><a href='/resume.pdf' className='glass px-4 py-2'>Download Resume</a><a href='#contact' className='glass px-4 py-2'>Contact</a></div></div>
<motion.div whileHover={{rotateY:6,rotateX:-6}} className='relative mx-auto h-80 w-80'><div className='absolute inset-0 rounded-full bg-cyan/30 blur-3xl'/><Image src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop' alt='Kaustubh profile' fill className='rounded-full object-cover border border-cyan/40'/></motion.div>
</section>}
