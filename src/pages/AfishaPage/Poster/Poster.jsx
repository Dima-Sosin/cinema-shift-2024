import styles from "./Poster.module.css"
import { useNavigate } from "react-router-dom"
import { Rating } from "../../../components/rating"
import { Button } from "../../../components/button"
import { BASE_URL } from "../../../api/api"

export function Poster({ film }) {
    const navigate = useNavigate()

    const year = () => {
        const len = film.releaseDate.length
        const str = film.releaseDate.slice(len - 4)
        return str
    }

    const filmPage = () => {
        navigate("/film/" + film.id, { replace: false })
    }

    return (
        <div className={styles.poster} onClick={filmPage}>
            <div className={styles.img}>
                <img src={BASE_URL + film.img} alt="poster" />
                <div className={styles.block}>
                    <p className={styles.genre}>{film.genres[0]}</p>
                    <p className={styles.country}>
                        {film.country.name}, {year()}
                    </p>
                </div>
            </div>
            <h2 className={styles.title}>{film.name}</h2>
            <p className={styles.subtitle}>{film.originalName}</p>
            <Rating kin={film.userRatings.kinopoisk} imdb={film.userRatings.imdb} />
            <Button>Подробнее</Button>
        </div>
    )
}
