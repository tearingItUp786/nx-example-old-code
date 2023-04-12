import styles from './decrease-counter.module.css'

/* eslint-disable-next-line */
export interface DecreaseCounterProps {
    onDecreaseCount: () => void
}

export function DecreaseCounter(props: DecreaseCounterProps) {
    return (
        <button
            style={{
                backgroundColor: 'green',
                padding: '10px',
                borderRadius: '5px',
            }}
            onClick={props.onDecreaseCount}
        >
            Decrease the count
        </button>
    )
}

export default DecreaseCounter
