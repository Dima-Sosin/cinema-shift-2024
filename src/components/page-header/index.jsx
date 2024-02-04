import styles from "./styles.module.css"
import logo from "../../assets/logo.svg"
import exit from "../../assets/exit.svg"
import { Link } from "react-router-dom"

export function PageHeader() {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="website logo" />
          <Link className={styles.link} to="/profile">
            Профиль
          </Link>
          <Link className={styles.link} to="/tickets">
            Билеты
          </Link>
        </div>
        <div className={styles.right}>
          <img src={exit} alt="exit" />
          <a className={styles.link} href="#">
            Выйти
          </a>
        </div>
      </div>
    </div>
  )
}
