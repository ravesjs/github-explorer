import React, { useState, FC, FormEvent, ChangeEvent } from 'react'
import Text from '@/shared/ui/text'
import Select from '@/shared/ui/select'
import type { SelectOption } from '@/shared/ui/select'
import { FetchParams, FormProps } from '../../model/types'

const Form: FC<FormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<FetchParams>({ nickname: '', type: 'user' })

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setForm((prev) => ({ ...prev, nickname: value }))
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setForm((prev) => ({ ...prev, type: value as SelectOption }))
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <Text value={form.nickname} onChange={handleTextChange} />
        <Select value={form.type} onChange={handleSelectChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
