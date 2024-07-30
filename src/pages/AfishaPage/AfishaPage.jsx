import styles from "./AfishaPage.module.scss";
import { useLoaderData, ScrollRestoration } from "react-router-dom";
import { Poster } from "./Poster/Poster";
import { PageLayout } from "../../components/PageLayout/PageLayout";

export const AfishaPage = () => {
    const data = useLoaderData();
    return (
        <PageLayout>
            <h1>Афиша</h1>
            {data.success && (
                <ul className={styles.cards}>
                    {data.films.map(film => (
                        <li key={film.id}>
                            <Poster film={film} />
                        </li>
                    ))}
                </ul>
            )}
            <ScrollRestoration />
        </PageLayout>
    );
};
