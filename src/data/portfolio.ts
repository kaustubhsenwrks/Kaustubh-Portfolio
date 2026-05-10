export const profile = {
  name: 'Kaustubh Sen',
  role: 'AI/ML Developer',
  bio: 'Building intelligent systems that merge AI with real-world execution.',
  socials: { github: 'https://github.com/Kaustubh207', linkedin: 'https://linkedin.com/in/kaustubhsenwrks' }
};

export const projects = [
  'AlgoVisualizer','Smart Calculator','COVID-19 Analyzer','SkillSync','ArtSpot','Airplane Boarding RL Environment'
].map((name, i) => ({ name, demo: '#', github: 'https://github.com/Kaustubh207', stack: ['Next.js','TypeScript','Python','AI'], achievement: i===0 ? 'Hackathon winner' : 'Production prototype' }));
