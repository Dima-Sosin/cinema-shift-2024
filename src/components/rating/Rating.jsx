import styles from "./Rating.module.scss";

import { Star } from "./Star.jsx";

export function Rating({ kin, imdb }) {
    const stars = () => {
        const star = Math.round((Number(kin) + Number(imdb)) / 4);
        const arr = [];
        for (let i = 0; i < star; i++)
            arr.push(<Star color="#FFB219" key={i} />); // золотые звезды
        for (let i = star; i < 5; i++)
            arr.push(<Star color="#CED2DA" key={i} />); // серые звезды
        return arr;
    };

    return (
        <div className={styles.rating}>
            <div className={styles.stars}>{stars()}</div>
            <div className={styles.score}>
                <span>Kinopoisk -{kin}</span>
                <span> IMDB -{imdb}</span>
            </div>
        </div>
    );
}
