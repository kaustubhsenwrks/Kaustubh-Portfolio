import { Suspense } from 'react';
async function getGithub(){const r=await fetch('https://api.github.com/users/Kaustubh207',{next:{revalidate:3600}});return r.json();}
async function Panel(){const gh=await getGithub();return <div className='grid gap-4 md:grid-cols-4'>{[['Repos',gh.public_repos],['Followers',gh.followers],['Following',gh.following],['Type',gh.type]].map(([k,v])=><div key={String(k)} className='glass p-4'><p className='text-xs text-cyan'>{k}</p><p className='text-2xl font-bold'>{String(v)}</p></div>)}</div>}
export default function LiveStats(){return <section className='section'><h2 className='mb-6 text-3xl font-semibold'>Live Engineering Stats</h2><Suspense fallback={<p>Loading telemetry...</p>}><Panel/></Suspense></section>}
