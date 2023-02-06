import React from 'react'
import { NewLib } from 'new-lib'
import { DecreaseCounter } from 'decrease-counter'
import styles from './yolo.module.css'

function Yolo() {
    const [count, setCount] = React.useState(0)
    return (
        <div className={styles?.container}>
            For the win baby from old app if you know
            {/* This new lib comes from NX and we use DI to give it what it needs */}
            <NewLib count={count} setCount={setCount} />
            <br />
            {/* an older component that we need to update */}
            <DecreaseCounter
                onDecreaseCount={() => {
                    setCount((c) => c - 1)
                }}
            />
        </div>
    )
}
export default Yolo
