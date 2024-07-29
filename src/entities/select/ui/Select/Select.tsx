import React from 'react'
import { SelectProps } from '../../model/types'
import styles from './Select.module.scss'

function Select({ value, onChange }: SelectProps) {
  return (
    <div className={styles.select}>
      <label htmlFor="type">Type:</label>
      <select id="type" value={value} onChange={onChange}>
        <option value="user">User</option>
        <option value="repo">Repo</option>
      </select>
    </div>
  )
}

export default Select
