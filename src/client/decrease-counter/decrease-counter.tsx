import React from 'react'

type Props = {
  onDecreaseCount: () => void
}

export const DecreaseCounter = ({ onDecreaseCount }: Props) => {
  return (
    <button
      style={{
        padding: '10px',
        borderRadius: '5px',
      }}
      onClick={onDecreaseCount}
    >
      Decrease the count
    </button>
  )
}
