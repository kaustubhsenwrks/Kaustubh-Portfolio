'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroTerminal from '../terminal/hero-terminal';
import { profile } from '@/data/portfolio';

export default function Hero(){return <section className='section grid items-center gap-10 lg:grid-cols-2'>
<div className='space-y-6'><HeroTerminal/><p className='text-cyan'>{profile.role}</p><h1 className='text-4xl font-bold lg:text-6xl'>Hey, I&apos;m {profile.name}.</h1><p className='text-white/70'>{profile.bio}</p><div className='flex gap-3 flex-wrap'><a href='#projects' className='glass px-4 py-2'>View Projects</a><a href='#achievements' className='glass px-4 py-2'>Achievements</a><a href='#contact' className='glass px-4 py-2'>Contact</a></div></div>
<motion.div whileHover={{rotateY:6,rotateX:-6}} className='relative mx-auto h-80 w-80'><div className='absolute inset-0 rounded-full bg-cyan/30 blur-3xl'/><Image src='/static/kaustubh.jpg' alt='Kaustubh profile' fill className='rounded-full object-cover border border-cyan/40'/></motion.div>
</section>}
