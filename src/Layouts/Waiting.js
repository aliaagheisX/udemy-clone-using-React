import React from 'react'
import styles from './styles/Layout.module.css'

export default function WaitingPage() {
  return (
    <div className={styles.Layout}>
      <img src='/Waiting.gif' alt='waiting' width='128' />
      <h2>Wait Please</h2>
    </div>
  )
}
