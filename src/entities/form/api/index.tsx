import React, { useState } from 'react'
import axios from 'axios'
import Result from '@/entities/result'
import type { ResultData } from '@/entities/result'
import { Form, User, Repo, FetchParams } from '@/entities/form'
import styles from '../ui/Form/Form.module.scss'

function Endpoint() {
  const [result, setResult] = useState<ResultData>(null)

  const fetchData = async ({ nickname, type }: FetchParams) => {
    try {
      if (type === 'user') {
        const response = await axios.get<User>(`https://api.github.com/users/${nickname}`)
        setResult(response.data)
      } else if (type === 'repo') {
        const response = await axios.get<Repo>(`https://api.github.com/repos/${nickname}`)
        console.log(response)
        setResult(response.data)
      }
    } catch (error) {
      setResult(result)
    }
  }
  return (
    <div className={styles.container}>
      <Form onSubmit={fetchData} />
      {result && <Result result={result} />}
    </div>
  )
}

export default Endpoint
