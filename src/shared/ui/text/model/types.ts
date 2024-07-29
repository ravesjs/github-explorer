import { ChangeEvent } from 'react'

export interface TextProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}