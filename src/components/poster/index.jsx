import styles from "./styles.module.css"
import { Rating } from "../rating/index.jsx"
import { Button } from "../button"
import { baseUrl } from "../../api/request"

export function Poster({ film }) {
   return (
      <div className={styles.poster}>
         <div className={styles.img}>
            <img src={baseUrl + film.img} alt="poster"></img>
         </div>
         <h2 className={styles.title}>{film.name}</h2>
         <p className={styles.subtitle}>{film.description}</p>
         <Rating num={film.userRatings.kinopoisk} />
         <Button>Подробнее</Button>
      </div>
   )
}
