export interface Repository {
  id: number,
  name: string,
  description: string,
  html_url: string,
  created_at: Date
}

export interface RepositoryItemProps {
  repository: Repository
}