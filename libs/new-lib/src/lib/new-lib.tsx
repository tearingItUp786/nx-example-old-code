import styles from './new-lib.module.css'

/* eslint-disable-next-line */
export interface NewLibProps {}

export function NewLib(props: NewLibProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to NewLib!</h1>
            <h2>I'm inside of the nx libs</h2>
        </div>
    )
}

export default NewLib
