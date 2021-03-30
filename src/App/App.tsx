import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../components/Header/Header'
import { useRoutes } from '../hooks/useRoutes';
import styles from './App.module.scss'
import { AuthContext } from './context/AuthContext'
import { useAuth } from '../hooks/useAuth';


export default function App() {

  const { token, login } = useAuth()
  console.log('token')
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token,
      login,
      isAuthenticated
    }}>
      <div className={styles['app']}>
        <Router>
          <Header />
          {routes}
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

