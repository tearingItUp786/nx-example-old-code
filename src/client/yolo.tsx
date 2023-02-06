import { NewLib } from 'new-lib'
import React from 'react'
import styles from './yolo.module.css'

function Yolo() {
  const [count, setCount] = React.useState(0)
  return (
    <div className={styles?.container}>
      For the win baby from old app if you know
      <NewLib count={count} setCount={setCount} />
    </div>
  )
}
export default Yolo
