import styles from "./AfishaPage.module.scss";

import { ScrollRestoration, useLoaderData } from "react-router-dom";

import { PageLayout } from "../../components/PageLayout/PageLayout";

import { Poster } from "./Poster/Poster";

export function AfishaPage() {
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
}
