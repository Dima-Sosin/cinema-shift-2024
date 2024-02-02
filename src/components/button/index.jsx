import styles from "./styles.module.css"
import { useNavigate } from 'react-router-dom';

export const Button = ({ children, filmId }) => {

   const navigate = useNavigate();
   const filmPage = () => {
      
   navigate('film/' + filmId, { replace: false })
   }

   return(
      <button className={styles.button} onClick={filmPage}>{children}</button>
   )
}
