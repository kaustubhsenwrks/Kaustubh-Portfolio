'use client';
import { useState } from 'react';
export default function ResumeDownload(){const [msg,setMsg]=useState('');return <button className='glass px-3 py-2 text-sm' onClick={()=>{setMsg('> downloading resume.pdf...');setTimeout(()=>window.open('/resume.pdf','_blank'),600);}}>Terminal Resume {msg && <span className='ml-2 text-cyan'>{msg}</span>}</button>}
