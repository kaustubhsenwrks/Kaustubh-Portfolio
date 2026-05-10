'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.09 });
    let raf = 0;
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
}
