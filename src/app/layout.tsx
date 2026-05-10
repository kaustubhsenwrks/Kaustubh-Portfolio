import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Kaustubh Sen | Cinematic Portfolio',
  description: 'Futuristic AI/ML developer operating system portfolio.',
  openGraph: { title: 'Kaustubh Sen | Cinematic Portfolio', description: 'AI engineer cyberpunk showcase', url: 'https://kaustubh-sen.vercel.app' }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en' className='dark'><body>{children}</body></html>}
