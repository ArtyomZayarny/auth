import { Switch, Redirect, Route } from 'react-router-dom'
import { WelcomePage } from '../pages/WelcomePage'
import { AppPage } from '../pages/AppPage'
import { SignupPage } from '../pages/SignupPage'
import { LoginPage } from '../pages/LoginPage'



export const useRoutes = (auth: boolean) => {

  if (!auth) {
    return (
      <Switch>
        <Route path="/" exact>
          <AppPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
}