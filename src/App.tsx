import styles from './App.module.css'

import { HomePage } from './pages/home'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  )
}

export default App
