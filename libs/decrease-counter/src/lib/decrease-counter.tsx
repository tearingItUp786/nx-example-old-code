import styles from './decrease-counter.module.css'

/* eslint-disable-next-line */
export interface DecreaseCounterProps {
  onDecreaseCount: () => void
}

export function DecreaseCounter(props: DecreaseCounterProps) {
  return (
    <div className={styles['container']}>
      <button onClick={props.onDecreaseCount}>Decrease the count</button>
    </div>
  )
}

export default DecreaseCounter
