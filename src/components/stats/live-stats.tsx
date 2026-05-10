import { Suspense } from 'react';

const GITHUB_USER = 'Kaustubhsenwrks';
const LEETCODE_USER = 'kaustubhsenwrks';

type Repo = { name: string; stargazers_count: number; html_url: string; language: string | null; forks_count: number };

type GithubUser = { public_repos: number; followers: number; following: number; bio: string | null };

async function getGithubUser(): Promise<GithubUser | null> {
  const r = await fetch(`https://api.github.com/users/${GITHUB_USER}`, { next: { revalidate: 3600 } });
  if (!r.ok) return null;
  return r.json();
}

async function getTopRepos(): Promise<Repo[]> {
  const r = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, { next: { revalidate: 3600 } });
  if (!r.ok) return [];
  const repos: Repo[] = await r.json();
  return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
}

async function getRecentCommits(): Promise<number> {
  const r = await fetch(`https://api.github.com/users/${GITHUB_USER}/events?per_page=100`, { next: { revalidate: 1800 } });
  if (!r.ok) return 0;
  const events = await r.json();
  return events
    .filter((event: { type?: string }) => event.type === 'PushEvent')
    .reduce((sum: number, event: { payload?: { commits?: unknown[] } }) => sum + (event.payload?.commits?.length ?? 0), 0);
}

async function getLeetCodeStats() {
  const endpoints = [
    `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USER}`,
    `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USER}`
  ];

  for (const endpoint of endpoints) {
    const r = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (r.ok) {
      const data = await r.json();
      if (data && !data.errors && !data.error) return data;
    }
  }

  return null;
}

async function Panel() {
  const [gh, repos, commits, leetcode] = await Promise.all([getGithubUser(), getTopRepos(), getRecentCommits(), getLeetCodeStats()]);

  const githubStats = [
    ['Public Repos', gh?.public_repos ?? 'N/A'],
    ['Followers', gh?.followers ?? 'N/A'],
    ['Following', gh?.following ?? 'N/A'],
    ['Recent Commits (100 events)', commits]
  ];

  const leetStats = [
    ['Total Solved', leetcode?.totalSolved ?? 'N/A'],
    ['Easy / Medium / Hard', leetcode ? `${leetcode.easySolved}/${leetcode.mediumSolved}/${leetcode.hardSolved}` : 'N/A'],
    ['Acceptance Rate', leetcode?.acceptanceRate ? `${leetcode.acceptanceRate}%` : 'N/A'],
    ['Ranking', leetcode?.ranking ?? 'N/A']
  ];

  return (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-xl font-semibold text-cyan'>GitHub Intelligence • {GITHUB_USER}</h3>
        <div className='grid gap-4 md:grid-cols-4'>
          {githubStats.map(([k, v]) => (
            <div key={String(k)} className='glass p-4'>
              <p className='text-xs text-cyan'>{k}</p>
              <p className='text-2xl font-bold'>{String(v)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='glass p-5'>
        <h4 className='mb-3 text-lg font-semibold'>Top Repositories</h4>
        <div className='grid gap-3 md:grid-cols-2'>
          {repos.map((repo) => (
            <a key={repo.name} href={repo.html_url} target='_blank' className='rounded-xl border border-white/10 p-3 transition hover:border-cyan/60'>
              <p className='font-semibold'>{repo.name}</p>
              <p className='text-sm text-white/70'>⭐ {repo.stargazers_count} • Forks {repo.forks_count} • {repo.language ?? 'Unknown'}</p>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-xl font-semibold text-cyan'>LeetCode Telemetry • {LEETCODE_USER}</h3>
        <div className='grid gap-4 md:grid-cols-4'>
          {leetStats.map(([k, v]) => (
            <div key={String(k)} className='glass p-4'>
              <p className='text-xs text-cyan'>{k}</p>
              <p className='text-2xl font-bold'>{String(v)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LiveStats() {
  return (
    <section className='section'>
      <h2 className='mb-2 text-3xl font-semibold'>Developer Command Center</h2>
      <p className='mb-6 text-white/70'>Live coding signals from GitHub and LeetCode to showcase consistency, depth, and engineering momentum.</p>
      <Suspense fallback={<p>Syncing developer telemetry...</p>}>
        <Panel />
      </Suspense>
    </section>
  );
}
