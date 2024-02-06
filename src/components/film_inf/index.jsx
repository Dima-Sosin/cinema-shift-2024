import styles from "./styles.module.css"
import { Rating } from "../rating"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { request } from "../../api/request"
import { baseUrl } from "../../api/request"
import buttonBack from "../../assets/back.svg"

export function FilmInf({ num }) {
  const [filmD, setFilmData] = useState({})
  const nav = useNavigate();

  useEffect(() => {
    request
      .fetch("/cinema/film/" + num)
      .then((response) => response.json())
      .then((data) => setFilmData(data))
  }, [])

  const ratingAge = (age) => {
    let rusAge = ""
    switch (age) {
      case "NC17":
        rusAge = "18+"
        break
      case "R":
        rusAge = "16+"
        break
      case "PG 13":
        rusAge = "12+"
        break
      case "PG":
        rusAge = "6+"
        break
      case "G":
        rusAge = "0+"
        break
    }
    return rusAge
  }

  const year = () => {
    const len = filmD.film.releaseDate.length
    const str = filmD.film.releaseDate.slice(len - 4)
    return str
  }

  return (
    filmD.success == true && (
      <div className={styles.poster}>
        <a className={styles.btnBack} onClick={() => nav(-1)}>
          <img src={buttonBack} alt="button back" /> <p>Назад</p>
        </a>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={baseUrl + filmD.film.img} alt="poster" />
            <div className={styles.block}>
              <p className={styles.genre}>{filmD.film.genres[0]}</p>
              <p className={styles.country}>
                {filmD.film.country.name}, {year()}
              </p>
            </div>
          </div>
          <div className={styles.inf}>
            <h2 className={styles.title}>
              {filmD.film.name} ({ratingAge(filmD.film.ageRating)})
            </h2>
            <p className={styles.subtitle}>{filmD.film.originalName}</p>
            <Rating
              kin={filmD.film.userRatings.kinopoisk}
              imdb={filmD.film.userRatings.imdb}
            />
            <p className={styles.text}>
              <span className={styles.span}>Дата выхода: </span>
              {filmD.film.releaseDate}
            </p>
            <p className={styles.text}>
              <span className={styles.span}>Актеры: </span>
              {filmD.film.actors.map((actor) => {
                return actor.fullName + ", "
              })}
            </p>
            <p className={styles.text}>
              <span className={styles.span}>Продюссеры: </span>
              {filmD.film.directors.map((director) => {
                return director.fullName + ", "
              })}
            </p>
            <p className={styles.description}>
              <span className={styles.span}>Описание: </span>
              {filmD.film.description}
            </p>
          </div>
        </div>
      </div>
    )
  )
}
