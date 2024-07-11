import styles from "./styles.module.css"
import { Rating } from "../../../components/rating"
import { useState, useEffect } from "react"
import { BASE_URL } from "../../../api/api"

export function FilmInf({ film }) {

    const year = () => {
        const len = film.releaseDate.length
        const str = film.releaseDate.slice(len - 4)
        return str
    }

    return (
        film.success == true && (
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src={BASE_URL + filmD.film.img} alt={`Изображение постера к фильму "${film.name}"`} />
                    <div className={styles.block}>
                        <p className={styles.genre}>
                            {film.film.genres[0]}
                        </p>
                        <p className={styles.country}>
                            {film.film.country.name}, {year()}
                        </p>
                    </div>
                </div>
                <div className={styles.inf}>
                    <h2 className={styles.title}>
                        {filmD.film.name} {Translation[filmD.film.ageRating]}
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
