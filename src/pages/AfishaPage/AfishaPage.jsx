import styles from "./AfishaPage.module.scss"
import { useLoaderData } from "react-router-dom";
import { Poster } from "./Poster/Poster";
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const AfishaPage = () => {
    const films = useLoaderData().films;
    return (
        <PageLayout>
            <h2>Афиша</h2>
            <ul className={styles.cards}>
                {films.map((film) => (
                    <li key={film.id}>
                        <Poster film={film} />
                    </li>
                ))}
            </ul>
        </PageLayout>
    );
};
