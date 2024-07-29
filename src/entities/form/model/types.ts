import { SelectOption } from '@/entities/select'

export interface User {
  name: string
  public_repos: number
}

export interface Repo {
  full_name: string
  stargazers_count: number
}

export interface FetchParams {
  nickname: string
  type: SelectOption
}

export interface FormProps {
  onSubmit: (params: FetchParams) => void
}
