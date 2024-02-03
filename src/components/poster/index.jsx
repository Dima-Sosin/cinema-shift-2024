import styles from "./styles.module.css"
import { Rating } from "../rating/index.jsx"
import { Button } from "../button"
import { baseUrl } from "../../api/request"
import { useNavigate } from "react-router-dom"

export function Poster({ film }) {
   const year = () => {
      const len = film.releaseDate.length
      const str = film.releaseDate.slice(len - 4)
      return str
   }

   const navigate = useNavigate()
   const filmPage = () => {
      navigate("/cinema/film/" + film.id, { replace: false })
   }

   return (
      <div className={styles.poster}>
         <div className={styles.img}>
            <img src={baseUrl + film.img} alt="poster"></img>
            <div className={styles.block}>
               <p className={styles.genre}>{film.genres[0]}</p>
               <p className={styles.country}>
                  {film.country.name}, {year()}
               </p>
            </div>
         </div>
         <h2 className={styles.title}>{film.name}</h2>
         <p className={styles.subtitle}>{film.description}</p>
         <Rating num={film.userRatings.kinopoisk} />
         <Button onClick={filmPage}>Подробнее</Button>
      </div>
   )
}
