import { useLoaderData } from "react-router-dom"
import { Poster } from "./Poster/Poster"

export const AfishaPage = () => {
    const films = useLoaderData().films
    return (
        <div className="page">
            <div className="container">
                <h1>Афиша</h1>
                <ul className="cards">
                    {films.map((film) => (
                        <li key={film.id}>
                            <Poster film={film} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
