import { SelectOption } from '@shared/ui/select'

export interface User {
  name: string
  public_repos: number
  type: 'user';
}

export interface Repo {
  full_name: string
  stargazers_count: number
  type: 'repo';
}

export type ResultData = User | Repo | null

export interface FetchParams {
  nickname: string
  type: SelectOption
}

export interface FormProps {
  onSubmit: (params: FetchParams) => void
}
