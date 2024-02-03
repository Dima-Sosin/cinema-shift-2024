import styles from "./styles.module.css"
import { Rating } from "../rating"
import { useState, useEffect } from "react"
import { request } from "../../api/request"
import { baseUrl } from "../../api/request"

export function FilmInf({ num }) {
   const [filmD, setFilmData] = useState({})

   useEffect(() => {
      request
         .fetch("/cinema/film/" + num)
         .then((response) => response.json())
         .then((data) => setFilmData(data))
   }, [])

   const year = () => {
      const len = filmD.film.releaseDate.length
      const str = filmD.film.releaseDate.slice(len - 4)
      return str
   }

   return (
      filmD.success == true && (
         <div className={styles.poster}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={baseUrl + filmD.film.img} alt="poster"></img>
                    <div className={styles.block}>
                        <p className={styles.genre}>{filmD.film.genres[0]}</p>
                        <p className={styles.country}>
                            {filmD.film.country.name}, {year()}
                        </p>
                    </div>
                </div>
                <div className={styles.inf}>
                    <h2 className={styles.title}>
                        {filmD.film.name}<br/>(Возрастной рейтинг {filmD.film.ageRating})
                    </h2>
                    <p className={styles.subtitle}>Дата выхода: {filmD.film.releaseDate}</p>
                    <Rating num={filmD.film.userRatings.kinopoisk} />
                    <p className={styles.description}>{filmD.film.description}</p>
                </div>
            </div>
         </div>
      )
   )
}
