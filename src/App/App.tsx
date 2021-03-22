import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useRoutes } from '../hooks/useRoutes';
import styles from './App.module.scss'

export default function App() {
  const isAuthenticated = false;
  const routes = useRoutes(isAuthenticated)
  return (
    <div className={styles['app']}>
      <Router>
        <Header />
        {routes}
      </Router>
    </div>
  );
}

