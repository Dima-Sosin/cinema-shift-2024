import styles from "./Poster.module.scss";

import { useNavigate } from "react-router-dom";

import { api } from "@api";
import { Button } from "@components/Button/Button";
import { Rating } from "@components/Rating/Rating";

export function Poster({ film }) {
    const navigate = useNavigate();

    const year = () => {
        const len = film.releaseDate.length;
        const str = film.releaseDate.slice(len - 4);
        return str;
    };

    const filmPage = () => {
        navigate(`/film/${film.id}`, { replace: false });
    };

    return (
        <div className={styles.poster} onClick={filmPage}>
            <div className={styles.img}>
                <img
                    src={api.defaults.baseURL + film.img}
                    alt={`Изображение постера к фильму "${film.name}"`}
                />
                <div className={styles.block}>
                    <p className={styles.genre}>{film.genres[0]}</p>
                    <p className={styles.country}>
                        {film.country.name},{year()}
                    </p>
                </div>
            </div>
            <h3 className={styles.title}>{film.name}</h3>
            <Rating
                kin={film.userRatings.kinopoisk}
                imdb={film.userRatings.imdb}
            />
            <Button view="primary">Подробнее</Button>
        </div>
    );
}
