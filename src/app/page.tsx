'use client';
import { Loader } from '@/components/cinematic/loader';
import CinematicBg from '@/components/background/cinematic-bg';
import Hero from '@/components/cinematic/hero';
import LiveStats from '@/components/stats/live-stats';
import Timeline from '@/components/experience/timeline';
import ProjectShowcase from '@/components/projects/showcase';
import AISection from '@/components/ai/ai-section';
import AuthorSection from '@/components/author/author-section';
import CommandPalette from '@/components/command/command-palette';
import ResumeDownload from '@/components/cinematic/resume-download';
import ContactSection from '@/components/cinematic/contact-section';
import { useLenis } from '@/hooks/use-lenis';

export default function Home(){useLenis();return <main><Loader/><CinematicBg/><CommandPalette/><Hero/><div className='section pt-0'><ResumeDownload/></div><LiveStats/><Timeline/><ProjectShowcase/><AISection/><AuthorSection/><ContactSection/></main>}
