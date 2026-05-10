import { profile } from '@/data/portfolio';

export default function ContactSection(){
  return <section id='contact' className='section'>
    <div className='glass p-8'>
      <h2 className='text-3xl font-semibold'>Contact</h2>
      <p className='mt-2 text-white/70'>Let&apos;s collaborate on AI, full-stack, and innovation-first products.</p>
      <div className='mt-4 flex flex-wrap gap-3'>
        <a href={profile.socials.email} className='glass px-4 py-2'>Email</a>
        <a href={profile.socials.linkedin} target='_blank' className='glass px-4 py-2'>LinkedIn</a>
        <a href={profile.socials.github} target='_blank' className='glass px-4 py-2'>GitHub</a>
        <a href={profile.socials.twitter} target='_blank' className='glass px-4 py-2'>Twitter</a>
        <a href={profile.socials.instagram} target='_blank' className='glass px-4 py-2'>Instagram</a>
      </div>
    </div>
  </section>
}
