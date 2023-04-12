// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css'
import OldApp from 'src/app'
// @ts-ignore
import chuckSrc from 'chuck-norris-fact-element/chuck-norris-fact.js'
import { Route, Routes, Link } from 'react-router-dom'

export function App() {
    return (
        <>
            <script type="module" src={chuckSrc}></script>
            <div />

            {/* START: routes */}
            {/* These routes and navigation have been generated for you */}
            {/* Feel free to move and update them to fit your needs */}
            <br />
            <hr />
            <br />
            <div role="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page-2">Page 2</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Below this the old app is being rendered</h1>
                            <h2>Welcome thin-app</h2>
                            <OldApp />
                        </>
                    }
                />
                <Route
                    path="/page-2"
                    element={
                        <div>
                            <Link to="/">
                                Click here to go back to root page.
                            </Link>
                            <br />
                            <br />
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/* @ts-ignore */}
                            <chuck-norris-fact></chuck-norris-fact>
                        </div>
                    }
                />
            </Routes>
            {/* END: routes */}
        </>
    )
}

export default App
