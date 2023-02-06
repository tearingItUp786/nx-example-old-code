import React from 'react'
import styles from './new-lib.module.css'

/* eslint-disable-next-line */
export interface NewLibProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function NewLib({ count, setCount }: NewLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewLib!</h1>
      <h2>I'm inside of the nx libs</h2>
      <h3>The count is {count}</h3>
      <button
        onClick={() => {
          setCount((a: number) => a + 1)
        }}
      >
        Increase the count
      </button>
    </div>
  )

export default NewLib
