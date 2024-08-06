import axios from 'axios'
import type { FetchParams } from '../model/types'
import type { Results } from '@features/result'

export const fetchData = async ({ nickname, type }: FetchParams) => {
  const response = await axios.get<Results>(
    `https://api.github.com/${type === 'user' ? 'users' : 'repos'}/${nickname}`
  )
  return response.data
}

