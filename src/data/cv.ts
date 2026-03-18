// Types for CV / Resume section. Data comes from profile.md via generated.ts.

export interface CVEntry {
  period: string
  title: string
  org: string
  description?: string
  thesisUrl?: string
  thesisLabel?: string
}

export interface CVData {
  education: CVEntry[]
  experience: CVEntry[]
  secondaryExperience?: CVEntry[]
  skills: string[]
  interests: string[]
}
