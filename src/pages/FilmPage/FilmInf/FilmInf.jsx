import styles from "./FilmInf.module.css";
import { Rating } from "../../../components/Rating/Rating";
import { BASE_URL } from "../../../api/api";
import { Translation } from "../../../Translation";

export function FilmInf({ film }) {
    const year = () => {
        const len = film.releaseDate.length;
        const str = film.releaseDate.slice(len - 4);
        return str;
    };

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img
                    src={BASE_URL + film.img}
                    alt={`Изображение постера к фильму "${film.name}"`}
                />
                <div className={styles.block}>
                    <p className={styles.genre}>{film.genres[0]}</p>
                    <p className={styles.country}>
                        {film.country.name}, {year()}
                    </p>
                </div>
            </div>
            <div className={styles.inf}>
                <h1 className={styles.title}>
                    {film.name} {Translation[film.ageRating]}
                </h1>
                <p className={styles.subtitle}>{film.originalName}</p>
                <Rating kin={film.userRatings.kinopoisk} imdb={film.userRatings.imdb} />
                <p className={styles.text}>
                    <span className={styles.span}>Дата выхода: </span>
                    {film.releaseDate}
                </p>
                <div className={styles.text}>
                    <span className={styles.span}>Актеры: </span>
                    <ul>
                        {film.actors.map((actor) => (
                            <li className={styles.elem} key={actor.id}>
                                {actor.fullName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.text}>
                    <span className={styles.span}>Продюссеры: </span>
                    <ul>
                        {film.directors.map((director) => (
                            <li className={styles.elem} key={director.id}>
                                {director.fullName}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className={styles.description}>
                    <span className={styles.span}>Описание: </span>
                    {film.description}
                </p>
            </div>
        </div>
    );
}
