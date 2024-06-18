import styles from "./styles.module.css"
import logo from "../../assets/logo.svg"
import profile from "../../assets/profile.svg"
import ticket from "../../assets/ticket.svg"
import exit from "../../assets/exit.svg"
import { Link } from "react-router-dom"

export const PageHeader = () => (
  <div className={styles.pageHeader}>
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logo} alt="website logo" />
        </Link>
        <Link className={styles.block} to="/profile">
          <img src={profile} alt="profile" />
          <span className={styles.link}>
            Профиль
          </span>
        </Link>
        <Link className={styles.block} to="/tickets">
          <img src={ticket} alt="ticket" />
          <span className={styles.link}>
            Билеты
          </span>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={exit} alt="exit" />
        <span className={styles.link}>
          Выйти
        </span>
      </div>
    </div>
  </div>
)
