import { useState, useMemo } from "react";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import RepoCard from "./RepoCard";
import SectionReveal from "./ui/SectionReveal";

const ALL_LANG = "All";

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos();
  const [langFilter, setLangFilter] = useState<string | null>(null);

  const languages = useMemo(() => {
    const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))] as string[];
    return langs.sort();
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (!langFilter || langFilter === ALL_LANG) return repos;
    return repos.filter((r) => r.language === langFilter);
  }, [repos, langFilter]);

  return (
    <section id="projects">
      <SectionReveal>
        <h2>Projects</h2>

        {loading && (
          <p className="projects-loading" aria-live="polite">
            Loading repositories...
          </p>
        )}

        {error && (
          <p className="projects-error" role="alert">
            {error}
          </p>
        )}

        {!loading && repos.length === 0 && (
          <p className="projects-empty">No repositories to show.</p>
        )}

        {!loading && repos.length > 0 && (
          <>
            {languages.length > 0 && (
              <div className="projects-filters" role="group" aria-label="Filter by language">
                <button
                  type="button"
                  className={`filter-chip ${!langFilter || langFilter === ALL_LANG ? "filter-chip--active" : ""}`}
                  onClick={() => setLangFilter(null)}
                  aria-pressed={!langFilter || langFilter === ALL_LANG}
                >
                  {ALL_LANG}
                </button>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    className={`filter-chip ${langFilter === lang ? "filter-chip--active" : ""}`}
                    onClick={() => setLangFilter(lang)}
                    aria-pressed={langFilter === lang}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}

            {filteredRepos.length > 0 && (
              <div className="projects-grid">
                {filteredRepos.map((repo) => (
                  <RepoCard key={repo.name} repo={repo} />
                ))}
              </div>
            )}

            {filteredRepos.length === 0 && languages.length > 0 && (
              <p className="projects-empty">No repositories match the selected filter.</p>
            )}
          </>
        )}
      </SectionReveal>
    </section>
  );
}
