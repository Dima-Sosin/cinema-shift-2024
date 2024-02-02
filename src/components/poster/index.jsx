import styles from "./styles.module.css"
import { Rating } from "../rating/index.jsx"
import { Button } from "../button"
import { baseUrl } from "../../api/request"



export function Poster({ film }) {
   const year = () => {
      const len = film.releaseDate.length
      const str = film.releaseDate.slice(len-4)
      return str
   }
   
   return (
      <div className={styles.poster}>
         <div className={styles.img}>
            <img src={baseUrl + film.img} alt="poster"></img>
            <div className={styles.block}>
               <p className={styles.genre}>{film.genres[0]}</p>
               <p className={styles.country}>{film.country.name}, {year()}</p>
            </div>
         </div>
         <h2 className={styles.title}>{film.name}</h2>
         <p className={styles.subtitle}>{film.description}</p>
         <Rating num={film.userRatings.kinopoisk} />
         <Button filmId={film.id}>Подробнее</Button>
      </div>
   )
}
