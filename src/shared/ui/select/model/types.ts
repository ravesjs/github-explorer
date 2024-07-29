import { ChangeEvent } from 'react'

export type SelectOption = 'user' | 'repo'
export interface SelectProps {
  value: SelectOption
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
