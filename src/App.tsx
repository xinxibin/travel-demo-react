import styles from './App.module.css'

import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={() => <h1>404 您所访问的页面丢失了 ！！！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
