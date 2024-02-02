import { NewLib } from 'new-lib'
import React from 'react'
import styles from './yolo.module.css'
import { DecreaseCounter } from 'libs/decrease-counter/src'
import { Otherthing } from 'libs/otherthing/src'

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
            <Otherthing />
        </div>
    )
}
export default Yolo
