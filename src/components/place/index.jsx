import styles from "./styles.module.css"

export const Place = ({ number, disabled, onClick }) => (
  <button className={styles.place} disabled={disabled} onClick={onClick}>
    {number}
  </button>
)