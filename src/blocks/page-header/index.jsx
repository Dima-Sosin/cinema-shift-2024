import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import exit from "../../assets/exit.svg";

export function PageHeader() {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="logo" />
          <a className={styles.link} href="#">
            Профиль
          </a>
          <a className={styles.link} href="#">
            Билеты
          </a>
        </div>
        <div className={styles.right}>
          <img src={exit} alt="exit" />
          <a className={styles.link}>Выйти</a>
        </div>
      </div>
    </div>
  );
}
