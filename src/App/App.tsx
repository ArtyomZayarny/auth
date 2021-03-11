import Main from '../components/Main'
import Header from '../components/Header'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

