export interface GithubProfile {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GithubRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  fork: boolean
  stargazers_count: number
  watchers_count: number
  forks_count: number
  open_issues_count: number
  language: string
  default_branch: string
  created_at: string
  updated_at: string
}

