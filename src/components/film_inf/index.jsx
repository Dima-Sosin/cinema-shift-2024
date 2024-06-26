import styles from "./styles.module.css"
import { Rating } from "../rating"
import { useState, useEffect } from "react"
import { request } from "../../api/request"
import { baseUrl } from "../../api/request"

export function FilmInf({ filmId }) {
    const [filmD, setFilmData] = useState({})

    useEffect(() => {
        request
            .fetch("/cinema/film/" + filmId)
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
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={baseUrl + filmD.film.img} alt="poster" />
                    <div className={styles.block}>
                        <p className={styles.genre}>
                            {filmD.film.genres[0]}
                        </p>
                        <p className={styles.country}>
                            {filmD.film.country.name}, {year()}
                        </p>
                    </div>
                </div>
                <div className={styles.inf}>
                    <h2 className={styles.title}>
                        {filmD.film.name} ({ratingAge(filmD.film.ageRating)}
                        )
                    </h2>
                    <p className={styles.subtitle}>
                        {filmD.film.originalName}
                    </p>
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
                        {filmD.film.actors.map((actor) => (
                            <span
                                className={styles.elem}
                                key={actor.fullName}
                            >
                                {actor.fullName}
                            </span>
                        ))}
                    </p>
                    <p className={styles.text}>
                        <span className={styles.span}>Продюссеры: </span>
                        {filmD.film.directors.map((director) => (
                            <span
                                className={styles.elem}
                                key={director.fullName}
                            >
                                {director.fullName}
                            </span>
                        ))}
                    </p>
                    <p className={styles.description}>
                        <span className={styles.span}>Описание: </span>
                        {filmD.film.description}
                    </p>
                </div>
            </div>
        )
    )
}
