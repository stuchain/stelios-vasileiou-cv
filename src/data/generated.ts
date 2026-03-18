// Generated from profile.md – do not edit by hand.
/* eslint-disable */
import type { Profile, Social } from '../types/profile'
import type { CVData } from './cv'
import type { RepoMinimal } from './fallbackRepos'
import type { SkillCategory } from './skills'

export const profile: Profile = {
  "name": "Stelios Vasileiou",
  "githubUsername": "stuchain",
  "tagline": "Full-Stack Developer at Netcompany.",
  "taglineLine2": "Transitioning into Blockchain Development - Web3, cryptography.",
  "location": "Athens, Greece",
  "avatarUrl": ""
}

export const social: Social = {
  "github": "https://github.com/stuchain",
  "linkedin": "https://www.linkedin.com/in/stelios-vasileiou/",
  "email": "mailto:stelios.vasiliou@icloud.com",
  "phone": "+306982880304"
}

export const bio: string[] = [
  "Full-Stack Developer at Netcompany, with a strong foundation in scalable web systems, UI architecture, and enterprise integrations.",
  "Currently transitioning into Blockchain Development; building Web3 prototypes (Solana, Ethereum, cryptography, secure channels)",
  "Bachelor thesis on Ethereum tokenization; built a Solana-based secure channel for decentralized identity verification."
]

export const cv: CVData = {
  "education": [
    {
      "period": "10/2025 – Present",
      "title": "Master of Applied Informatics (2 years remote; 90 ECTs)",
      "org": "University of Macedonia, Thessaloniki, Greece",
      "description": "Currently attending Blockchain, Cryptography and IoT courses."
    },
    {
      "period": "10/2020 – 02/2025",
      "title": "Bachelor of Computer Science (BSc, 240 ECTs)",
      "org": "Athens University of Economics and Business (AUEB), Athens, Greece",
      "description": "Thesis: Analysis of the Ethereum Ecosystem & Applications of Tokenization.",
      "thesisUrl": "https://github.com/stuchain/AUEB/tree/main/Thesis",
      "thesisLabel": "Bachelor thesis on Ethereum tokenization"
    }
  ],
  "experience": [
    {
      "period": "02/2025 – Present",
      "title": "Full-Stack Developer",
      "org": "Netcompany, Athens, Greece",
      "description": "Contributing to a next-generation Danish banking platform (NIL) for SDC: full-stack features (authentication, multitenancy, external integrations). Designed and implemented a scalable multitenant UI framework. Delivered system analysis and integration design documents for business-critical components."
    }
  ],
  "secondaryExperience": [
    {
      "period": "01/2020 – Present",
      "title": "Co-Owner",
      "org": "Heaven's Door Apartments, Samos, Greece",
      "description": "Operations, marketing, and digital infrastructure for boutique hospitality. Built custom booking workflow, SEO-focused website, and automated booking via Telegram bots; expanded guest services (car rentals, restaurant reservations)."
    },
    {
      "period": "2021–2024 / 02/2023–09/2023",
      "title": "Seasonal: IT & Concierge / Digital Operations",
      "org": "Cayos Agency, Mykonos; Athena Greek Gastronomy & She Boutique Hotel",
      "description": "Cayos: IT systems and booking workflows for luxury concierge; managed client requests and digital presence. Athena: POS and online reservation systems; streamlined booking and social media."
    }
  ],
  "skills": [],
  "interests": []
}

export const skills: SkillCategory[] = [
  {
    "category": "Technical",
    "items": [
      "Java",
      "Python",
      "Anchor",
      "C++",
      "JavaScript",
      "SQL",
      "Solidity",
      "React",
      "Node.js",
      "TypeScript"
    ]
  },
  {
    "category": "Soft skills",
    "items": [
      "Communication",
      "Ownership",
      "Problem-solving",
      "Team collaboration",
      "Critical thinking",
      "Attention to detail"
    ]
  },
  {
    "category": "Languages",
    "items": [
      "Greek (Native)",
      "English (C2)",
      "French (B2)"
    ]
  }
]

export const featuredRepos: string[] = [
  "CuePoint",
  "ctf-maze-arena",
  "mini-secure-channel-solana",
  "iot-oracle-gateway",
  "AUEB"
]

export const featuredCount: number = 5

export const fallbackRepos: RepoMinimal[] = [
  {
    "name": "CuePoint",
    "description": "Python app that enriches Rekordbox libraries with Beatport metadata using fuzzy matching and remix detection; reduces manual prep time for DJs.",
    "language": "Python",
    "stargazers_count": 0,
    "updated_at": "2024-01-15T10:00:00Z",
    "html_url": "https://github.com/stuchain/CuePoint",
    "topics": [
      "music",
      "metadata",
      "dj"
    ]
  },
  {
    "name": "ctf-maze-arena",
    "description": "CTF maze challenge and arena.",
    "language": "Python",
    "stargazers_count": 0,
    "updated_at": "2024-02-01T12:00:00Z",
    "html_url": "https://github.com/stuchain/ctf-maze-arena",
    "topics": [
      "ctf",
      "security"
    ]
  },
  {
    "name": "mini-secure-channel-solana",
    "description": "Secure channel (Python, Ed25519, AEAD) demonstrating DH MITM attack and mitigation; integrates Solana on-chain Key Registry. UoM project.",
    "language": "Python",
    "stargazers_count": 0,
    "updated_at": "2024-01-20T08:00:00Z",
    "html_url": "https://github.com/stuchain/mini-secure-channel-solana",
    "topics": [
      "solana",
      "cryptography",
      "secure-channel"
    ]
  },
  {
    "name": "iot-oracle-gateway",
    "description": "IoT oracle gateway for on-chain data.",
    "language": "TypeScript",
    "stargazers_count": 0,
    "updated_at": "2024-02-10T14:00:00Z",
    "html_url": "https://github.com/stuchain/iot-oracle-gateway",
    "topics": [
      "iot",
      "oracle"
    ]
  },
  {
    "name": "AUEB",
    "description": "Bachelor thesis: Ethereum ecosystem & tokenization. Coursework: e-commerce, P2P file-sharing, distributed booking (MapReduce), and more.",
    "language": "Java",
    "stargazers_count": 0,
    "updated_at": "2023-12-01T09:00:00Z",
    "html_url": "https://github.com/stuchain/AUEB",
    "topics": [
      "education",
      "ethereum",
      "thesis"
    ]
  }
]

export type { CVEntry, CVData } from './cv'
export type { RepoMinimal } from './fallbackRepos'
export type { SkillCategory } from './skills'
