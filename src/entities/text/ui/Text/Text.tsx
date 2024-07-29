import React from 'react';
import { TextProps } from '../../model/types';
import styles from './Text.module.scss'

function Text({ value, onChange }: TextProps) {
  return (
    <div className={styles.text}>
      <label htmlFor="nickname">Name / Repo:</label>
      <input id="nickname" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Text