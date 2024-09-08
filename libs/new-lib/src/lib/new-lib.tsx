import React from 'react'
import styles from './new-lib.module.css'

/* eslint-disable-next-line */
export interface NewLibProps {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export function NewLib({ count, setCount }: NewLibProps) {
    const classToUse =
        count > 10 ? 'has-background-danger-dark' : 'has-background-info-dark'
    return (
        <div className={'box is-bordered ' + classToUse}>
            <h2 className="">New Component</h2>
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
