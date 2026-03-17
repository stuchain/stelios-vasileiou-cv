import type { RepoMinimal } from '../data/fallbackRepos'
import PixelPanel from './ui/PixelPanel'

function formatUpdatedAt(updated_at: string): string {
  if (!updated_at) return '—'
  try {
    const date = new Date(updated_at)
    if (Number.isNaN(date.getTime())) return '—'
    return new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' }).format(date)
  } catch {
    return '—'
  }
}

export interface RepoCardProps {
  repo: RepoMinimal
}

export default function RepoCard({ repo }: RepoCardProps) {
  const description = repo.description?.trim() || 'No description'
  const updatedLabel = formatUpdatedAt(repo.updated_at)

  return (
    <article className="repo-card">
      <PixelPanel className="repo-card-panel">
        <h3 className="repo-card-title">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card-link"
          >
            {repo.name}
            <span className="repo-card-external" aria-hidden> ↗</span>
          </a>
        </h3>
        <p className="repo-card-desc">{description}</p>
        <div className="repo-card-meta">
          {repo.language && (
            <span className="repo-card-lang">{repo.language}</span>
          )}
          <span className="repo-card-stars" aria-label={`${repo.stargazers_count} stars`}>
            ★ {repo.stargazers_count}
          </span>
          <span className="repo-card-date">Updated {updatedLabel}</span>
        </div>
      </PixelPanel>
    </article>
  )
}
