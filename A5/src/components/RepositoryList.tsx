import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import { Repository } from "../interfaces/repository.interfaces"

import "../styles/repos.scss"

export function RepositoryList() {

    const [ repos, setRepos ] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/santicioli/repos')
            .then(response => response.json())
            .then(data => setRepos(
                data.sort((a: Repository, b: Repository) => a.created_at < b.created_at)
            ))
            .catch(error => console.error(error))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repos.map(repo => <RepositoryItem repository={repo} key={repo.id}/>)}     
            </ul>
        </section>
    )
}