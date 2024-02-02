import styles from './otherthing.module.css'

/* eslint-disable-next-line */
export interface OtherthingProps {}

export function Otherthing(props: OtherthingProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Otherthing!</h1>
        </div>
    )
}

export default Otherthing
