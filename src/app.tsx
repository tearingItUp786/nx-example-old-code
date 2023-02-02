import styles from './app.css'
import Yolo from './client/yolo'

function App() {
    console.log('wtf', styles)
    return (
        <div className={styles?.container}>
            {'react setup from scratch without cra testing ts'}
            <Yolo />
        </div>
    )
}
export default App
