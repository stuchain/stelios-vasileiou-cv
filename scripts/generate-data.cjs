const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function generateProfileData(projectRoot = process.cwd()) {
  const profilePath = path.join(projectRoot, 'profile.md')
  const outPath = path.join(projectRoot, 'src', 'data', 'generated.ts')

  const raw = fs.readFileSync(profilePath, 'utf-8')
  const { data } = matter(raw)

  const githubUsername = data.githubUsername || ''

  const profile = {
    name: data.name ?? '',
    githubUsername,
    tagline: data.tagline ?? '',
    taglineLine2: data.taglineLine2 ?? '',
    location: data.location ?? '',
    avatarUrl: data.avatarUrl ?? '',
  }

  const social = {
    github: data.social?.github ?? `https://github.com/${githubUsername}`,
    linkedin: data.social?.linkedin ?? '',
    email: data.social?.email ?? '',
    phone: data.social?.phone ?? undefined,
  }

  const bio = Array.isArray(data.bio) ? data.bio : (data.bio ? [data.bio] : [])

  const education = Array.isArray(data.education) ? data.education : []
  const experience = Array.isArray(data.experience) ? data.experience : []
  const secondaryExperience = Array.isArray(data.secondaryExperience) ? data.secondaryExperience : []
  const cv = {
    education: education.map((e) => ({
      period: e.period ?? '',
      title: e.title ?? '',
      org: e.org ?? '',
      description: e.description,
      thesisUrl: e.thesisUrl,
      thesisLabel: e.thesisLabel,
    })),
    experience: experience.map((e) => ({
      period: e.period ?? '',
      title: e.title ?? '',
      org: e.org ?? '',
      description: e.description,
    })),
    secondaryExperience: secondaryExperience.map((e) => ({
      period: e.period ?? '',
      title: e.title ?? '',
      org: e.org ?? '',
      description: e.description,
    })),
    skills: data.cvSkills ?? data.cv?.skills ?? [],
    interests: data.interests ?? data.cv?.interests ?? [],
  }

  const skills = Array.isArray(data.skills)
    ? data.skills.map((s) => ({
        category: s.category ?? '',
        items: Array.isArray(s.items) ? s.items : [],
      }))
    : []

  const featuredRepos = Array.isArray(data.featuredRepos) ? data.featuredRepos : []
  const featuredCount = typeof data.featuredCount === 'number' ? data.featuredCount : featuredRepos.length
  const excludedRepos = Array.isArray(data.excludedRepos) ? data.excludedRepos : []

  const baseUrl = `https://github.com/${githubUsername}`
  const fallbackRepos = (Array.isArray(data.fallbackRepos) ? data.fallbackRepos : []).map((r) => ({
    name: r.name ?? '',
    description: r.description ?? null,
    language: r.language ?? null,
    stargazers_count: typeof r.stargazers_count === 'number' ? r.stargazers_count : 0,
    updated_at: r.updated_at ?? '',
    html_url: `${baseUrl}/${encodeURIComponent(r.name ?? '')}`,
    topics: Array.isArray(r.topics) ? r.topics : undefined,
  }))

  const out = `// Generated from profile.md – do not edit by hand.
/* eslint-disable */
import type { Profile, Social } from '../types/profile'
import type { CVData } from './cv'
import type { RepoMinimal } from './fallbackRepos'
import type { SkillCategory } from './skills'

export const profile: Profile = ${JSON.stringify(profile, null, 2)}

export const social: Social = ${JSON.stringify(social, null, 2)}

export const bio: string[] = ${JSON.stringify(bio, null, 2)}

export const cv: CVData = ${JSON.stringify(cv, null, 2)}

export const skills: SkillCategory[] = ${JSON.stringify(skills, null, 2)}

export const featuredRepos: string[] = ${JSON.stringify(featuredRepos, null, 2)}

export const featuredCount: number = ${JSON.stringify(featuredCount)}

export const excludedRepos: string[] = ${JSON.stringify(excludedRepos, null, 2)}

export const fallbackRepos: RepoMinimal[] = ${JSON.stringify(fallbackRepos, null, 2)}

export type { CVEntry, CVData } from './cv'
export type { RepoMinimal } from './fallbackRepos'
export type { SkillCategory } from './skills'
`

  fs.writeFileSync(outPath, out, 'utf-8')
  return outPath
}

module.exports = { generateProfileData }

if (require.main === module) {
  const outPath = generateProfileData()
  console.log(`Generated ${path.relative(process.cwd(), outPath)} from profile.md`)
}
