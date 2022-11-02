import { RepositoryItemProps } from '../interfaces/repository.interfaces'

export function RepositoryItem(props: RepositoryItemProps) {
  const { name, description, html_url: url  } = props.repository
  
  return (
    <li className="repository-item">
      <strong className="repo-name">{name}</strong>
      <p className='repo-description'>{description}</p>
      <a className='repo-link' href={url}>Acessar o repositório</a>
    </li>
  )
}