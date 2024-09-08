import React from 'react'
import styles from './new-lib.module.css'

/* eslint-disable-next-line */
export interface NewLibProps {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export function NewLib({ count, setCount }: NewLibProps) {
    return (
        <div className="box has-background-success	is-bordered">
            <h2>Shiny New Component</h2>
            <h3>
                <strong>count: </strong>
                {count}
            </h3>
            <button
                className="button is-rounded"
                onClick={() => {
                    setCount((a: number) => a + 1)
                }}
            >
                ➕ count
            </button>
        </div>
    )
}

export default NewLib
