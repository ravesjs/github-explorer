import Form from './ui/Form/Form'
import Endpoint from '../endpoint/ui/Endpoint/Endpoint'
import { fetchData } from './api/githubApi'
import type { FetchParams, ResultData, Repo, User } from './model/types'

export type { FetchParams, ResultData, Repo, User }
export { Form, fetchData }
export default Endpoint
