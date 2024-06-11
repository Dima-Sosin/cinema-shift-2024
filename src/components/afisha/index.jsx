import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { Poster } from "../poster"
import { request } from "../../api/request"

export function Afisha() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    request
      .fetch("/cinema/today")
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.films)
      })
  }, [])

  return (
    <div className="page">
      <div className="container">
        <h1>Афиша</h1>
        <ul className={styles.cards}>
          {films.map((film) => (
            <li className={styles.card} key={film.id}>
              <Poster film={film} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
