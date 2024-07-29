import {User, Repo} from '@/entities/form'

export type ResultData = User | Repo | null;

export type Result = Exclude<ResultData, null>

export interface ResultProps {
  result: Result;
}