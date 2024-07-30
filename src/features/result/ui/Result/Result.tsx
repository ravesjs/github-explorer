import React from 'react'
import { Results } from '../../model/types'
import styles from './Result.module.scss'
import { Repo, User } from '@/features/form'

function Result({ result }: { result: Results }) {
  if ('public_repos' in result) {
    const user = result as User
    return (
      <div className={styles.result}>
        <ul>
          <li>Name: {user.name}</li>
          <li>Public Repos: {user.public_repos}</li>
        </ul>
      </div>
    )
  }
  if ('stargazers_count' in result) {
    const repo = result as Repo
    return (
      <div className={styles.result}>
        <ul>
          <li>Repo: {repo.full_name}</li>
          <li>Stars: {repo.stargazers_count}</li>
        </ul>
      </div>
    )
  }
  return null
}

export default Result
