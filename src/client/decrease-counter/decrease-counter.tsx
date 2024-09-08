type Props = {
    onDecreaseCount: () => void
}

export const DecreaseCounter = ({ onDecreaseCount }: Props) => {
    return (
        <button className="button is-rounded" onClick={onDecreaseCount}>
            ➖ count
        </button>
    )
}
