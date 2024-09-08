import React, { Component } from 'react'
import { NewLib } from 'new-lib'
import { DecreaseCounter } from './decrease-counter'

interface YoloState {
    count: number
}

class Yolo extends Component<{}, YoloState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            count: 0,
        }

        this.handleDecreaseCount = this.handleDecreaseCount.bind(this)
    }

    handleDecreaseCount() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        const { count } = this.state
        return (
            <div className="has-background-grey-dark p-4 box">
                <h2>Legacy Component</h2>
                {/* This new lib comes from NX and we use DI to give it what it needs */}
                <NewLib
                    count={count}
                    setCount={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                />
                <br />
                {/* an older component that we need to update */}
                <DecreaseCounter onDecreaseCount={this.handleDecreaseCount} />
            </div>
        )
    }
}

export default Yolo
