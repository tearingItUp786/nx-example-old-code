import React from 'react'
import styles from './app.module.css'
import Yolo from './client/yolo'

function App() {
    console.log('wtf', styles)
    return (
        <div className={styles?.container}>
            This is the old app
            <Yolo />
        </div>
    )
}
export default App
