import styles from './styles.module.css'

export const Button = ({children}) => 
  <button className={styles.button}>{children}</button>