import React, { useState } from 'react'
import Result from '@/features/result'
import type { FetchParams, ResultData } from '@/features/form'
import { fetchData, Form } from '@/features/form'
import styles from '@/features/form/ui/Form/Form.module.scss'

function Endpoint() {
  const [result, setResult] = useState<ResultData>(null)

  const handleFetchData = async (params: FetchParams) => {
    try {
      const response = await fetchData(params)
      setResult(response)
    } catch (error) {
      setResult(result)
    }
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={handleFetchData} />
      {result && <Result result={result} />}
    </div>
  )
}

export default Endpoint
