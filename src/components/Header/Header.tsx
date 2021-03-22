import { NavLink } from "react-router-dom";
import styles from './Header.module.scss'
import { Button } from 'antd'

export default function Header() {
  return (
    <div className={styles['header']}>
      <div className="container">
        <div className={styles['content']}>
          <h1><a href="/">LOGO</a></h1>
          <div className={styles['actions']}>
            <Button type="primary" className="login">
              <NavLink to='/login'>Log in</NavLink>
            </Button>
            <Button className={styles['signup']}>
              <NavLink to="/signup">Sign up</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}