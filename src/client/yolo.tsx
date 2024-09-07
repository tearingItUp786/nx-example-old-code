import { NewLib } from 'new-lib'
import React from 'react'
import { DecreaseCounter } from './decrease-counter'
import styles from './yolo.module.css'

function Yolo() {
    const [count, setCount] = React.useState(0)
    return (
        <div className="has-background-grey-dark p-4 box">
            <h2>Legacy Component</h2>
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
